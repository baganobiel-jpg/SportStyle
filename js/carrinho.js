/* =========================================================
   SPORTSTYLE — CARRINHO DE COMPRAS
   O carrinho guarda só id, tamanho, cor e quantidade.
   Nome, imagem e preço são sempre lidos do catálogo, então
   o carrinho nunca fica com preço desatualizado.
   ========================================================= */

const CHAVE_CARRINHO = "carrinho";
const CHAVE_CUPOM = "cupomAtivo";
const QTD_MAX = 10;
const FRETE_VALOR = 24.90;
const FRETE_GRATIS_ACIMA = 299.90;

const CUPONS_VALIDOS = {
  "SPORT10": 0.10,
  "BEMVINDO15": 0.15,
  "FEIRA20": 0.20
};

function lerStorage(chave, padrao) {
  try {
    const valor = JSON.parse(localStorage.getItem(chave));
    return valor === null || valor === undefined ? padrao : valor;
  } catch (e) {
    return padrao;
  }
}

function salvarStorage(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch (e) { /* armazenamento indisponível: ignora */ }
}

/* Aceita também carrinhos antigos (que guardavam nome/preço) e descarta itens que não existem mais */
function normalizarCarrinho(lista) {
  if (!Array.isArray(lista)) return [];
  return lista
    .filter(item => item && getProdutoPorId(item.id))
    .map(item => {
      const produto = getProdutoPorId(item.id);
      return {
        id: produto.id,
        tamanho: produto.tamanhos.includes(item.tamanho) ? item.tamanho : produto.tamanhos[0],
        cor: produto.cores.includes(item.cor) ? item.cor : produto.cores[0],
        quantidade: Math.min(QTD_MAX, Math.max(1, Number(item.quantidade) || 1))
      };
    });
}

function normalizarCupom(cupom) {
  if (!cupom || !CUPONS_VALIDOS[cupom.codigo]) return null;
  return { codigo: cupom.codigo, desconto: CUPONS_VALIDOS[cupom.codigo] };
}

let carrinho = normalizarCarrinho(lerStorage(CHAVE_CARRINHO, []));
let cupomAtivo = normalizarCupom(lerStorage(CHAVE_CUPOM, null));

function salvarCarrinho() {
  salvarStorage(CHAVE_CARRINHO, carrinho);
  atualizarContador();
}

/* ---------- adicionar / alterar / remover ---------- */

function adicionarCarrinho(id, tamanho, cor, quantidade) {
  const produto = getProdutoPorId(id);
  if (!produto) return;

  tamanho = tamanho || produto.tamanhos[0];
  cor = cor || produto.cores[0];
  quantidade = Math.max(1, Number(quantidade) || 1);

  const existente = carrinho.find(i => i.id === produto.id && i.tamanho === tamanho && i.cor === cor);

  if (existente) {
    if (existente.quantidade + quantidade > QTD_MAX) {
      existente.quantidade = QTD_MAX;
      salvarCarrinho();
      mostrarToast(`Limite de ${QTD_MAX} unidades por item.`);
      return;
    }
    existente.quantidade += quantidade;
  } else {
    carrinho.push({ id: produto.id, tamanho, cor, quantidade: Math.min(QTD_MAX, quantidade) });
  }

  salvarCarrinho();
  mostrarToast("Produto adicionado ao carrinho!");
}

/* Usado pelos botões dos cards (produtos de tamanho/cor únicos) */
function adicionarPorId(id) {
  adicionarCarrinho(id);
}

document.addEventListener("click", (e) => {
  const botao = e.target.closest("[data-add]");
  if (botao) adicionarPorId(Number(botao.dataset.add));
});

function atualizarContador() {
  const contador = document.getElementById("cart-count");
  if (contador) {
    contador.textContent = carrinho.reduce((soma, p) => soma + p.quantidade, 0);
  }
}

function removerProduto(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  carregarCarrinho();
}

function alterarQuantidade(index, delta) {
  const item = carrinho[index];
  if (!item) return;

  const nova = item.quantidade + delta;

  if (nova < 1) {
    removerProduto(index);
    return;
  }
  if (nova > QTD_MAX) {
    mostrarToast(`Limite de ${QTD_MAX} unidades por item.`);
    return;
  }

  item.quantidade = nova;
  salvarCarrinho();
  carregarCarrinho();
}

/* ---------- cálculos ---------- */

function arredondar(valor) {
  return Math.round(valor * 100) / 100;
}

function calcularSubtotal() {
  return arredondar(carrinho.reduce((soma, i) => soma + getProdutoPorId(i.id).preco * i.quantidade, 0));
}

function calcularDesconto(subtotal) {
  return cupomAtivo ? arredondar(subtotal * cupomAtivo.desconto) : 0;
}

function calcularFrete(baseCalculo) {
  if (carrinho.length === 0) return 0;
  return baseCalculo >= FRETE_GRATIS_ACIMA ? 0 : FRETE_VALOR;
}

/* ---------- cupom ---------- */

function mostrarMensagemCupom(texto, tipo) {
  const msg = document.getElementById("cupom-msg");
  if (!msg) return;
  msg.textContent = texto;
  msg.className = "cupom-msg " + tipo;
}

function aplicarCupom() {
  const input = document.getElementById("cupom-input");
  if (!input) return;

  const codigo = input.value.trim().toUpperCase();

  if (!codigo) {
    mostrarMensagemCupom("Digite um código de cupom.", "erro");
    return;
  }

  if (CUPONS_VALIDOS[codigo]) {
    cupomAtivo = { codigo, desconto: CUPONS_VALIDOS[codigo] };
    salvarStorage(CHAVE_CUPOM, cupomAtivo);
    carregarCarrinho();
    mostrarMensagemCupom(`Cupom aplicado! ${Math.round(cupomAtivo.desconto * 100)}% de desconto.`, "sucesso");
    input.value = "";
  } else {
    mostrarMensagemCupom("Cupom inválido.", "erro");
  }
}

function removerCupom() {
  cupomAtivo = null;
  localStorage.removeItem(CHAVE_CUPOM);
  mostrarMensagemCupom("", "");
  carregarCarrinho();
}

/* ---------- tela do carrinho ---------- */

function htmlItemCarrinho(item, index) {
  const produto = getProdutoPorId(item.id);
  const meta = [`Tamanho: ${esc(item.tamanho)}`];
  if (produto.cores.length > 1 || item.cor !== "Padrão") meta.push(`Cor: ${esc(item.cor)}`);

  return `
    <div class="cart-item">
      <a href="produto.html?id=${produto.id}" class="cart-item-imglink">
        <img src="${produto.imagem}" alt="${esc(produto.nome)}" class="cart-item-img" onerror="imgFallback(this)">
      </a>

      <div class="cart-item-info">
        <h3><a href="produto.html?id=${produto.id}">${esc(produto.nome)}</a></h3>
        <p class="cart-item-meta">${meta.join(" · ")}</p>
        <p class="cart-item-price">${formatarPreco(produto.preco)}</p>

        <div class="qty-control">
          <button type="button" onclick="alterarQuantidade(${index}, -1)" aria-label="Diminuir quantidade">−</button>
          <span aria-live="polite">${item.quantidade}</span>
          <button type="button" onclick="alterarQuantidade(${index}, 1)" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>

      <div class="cart-item-side">
        <span class="cart-item-subtotal">${formatarPreco(produto.preco * item.quantidade)}</span>
        <button type="button" class="remove-btn" onclick="removerProduto(${index})" aria-label="Remover ${esc(produto.nome)}">Remover</button>
      </div>
    </div>
  `;
}

function definirTexto(id, texto) {
  const el = document.getElementById(id);
  if (el) el.textContent = texto;
}

function carregarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  if (!lista) return;

  const vazio = carrinho.length === 0;

  lista.innerHTML = vazio
    ? `<div class="empty-state">
         <p>Seu carrinho está vazio.</p>
         <a href="masculino.html" class="btn">Ver Catálogo</a>
       </div>`
    : carrinho.map(htmlItemCarrinho).join("");

  /* Esconde cupom e resumo quando não há itens */
  document.querySelectorAll(".cupom-box, .cart-summary").forEach(el => {
    el.style.display = vazio ? "none" : "";
  });
  if (vazio) return;

  const subtotal = calcularSubtotal();
  const desconto = calcularDesconto(subtotal);
  const baseFrete = subtotal - desconto;
  const frete = calcularFrete(baseFrete);
  const total = arredondar(baseFrete + frete);

  definirTexto("subtotal", formatarPreco(subtotal));
  definirTexto("total", formatarPreco(total));
  definirTexto("frete-valor", frete === 0 ? "Grátis" : formatarPreco(frete));

  const aviso = document.getElementById("frete-aviso");
  if (aviso) {
    if (frete === 0) {
      aviso.textContent = "Você ganhou frete grátis!";
      aviso.className = "frete-aviso ok";
    } else {
      aviso.textContent = `Falta ${formatarPreco(FRETE_GRATIS_ACIMA - baseFrete)} para ganhar frete grátis.`;
      aviso.className = "frete-aviso";
    }
  }

  const barra = document.getElementById("frete-barra");
  if (barra) barra.style.width = Math.min(100, (baseFrete / FRETE_GRATIS_ACIMA) * 100) + "%";

  const linhaDesconto = document.getElementById("linha-desconto");
  const cupomBox = document.getElementById("cupom-ativo");

  if (cupomAtivo) {
    if (linhaDesconto) linhaDesconto.style.display = "flex";
    definirTexto("desconto-valor", "− " + formatarPreco(desconto));
    if (cupomBox) {
      cupomBox.style.display = "flex";
      cupomBox.innerHTML = `
        <span>Cupom <strong>${esc(cupomAtivo.codigo)}</strong> aplicado (−${Math.round(cupomAtivo.desconto * 100)}%)</span>
        <button type="button" onclick="removerCupom()" class="remove-cupom-btn">Remover</button>
      `;
    }
  } else {
    if (linhaDesconto) linhaDesconto.style.display = "none";
    if (cupomBox) cupomBox.style.display = "none";
  }
}

/* ---------- finalizar compra ---------- */

function finalizarCompra() {
  if (carrinho.length === 0) {
    mostrarToast("Seu carrinho está vazio.");
    return;
  }

  /* É preciso estar logado para finalizar */
  const usuario = typeof getUsuarioLogado === "function" ? getUsuarioLogado() : null;
  if (!usuario) {
    mostrarToast("Entre na sua conta para finalizar a compra.");
    setTimeout(() => { window.location.href = "login.html?redirect=carrinho.html"; }, 1300);
    return;
  }

  const modal = document.getElementById("checkout-modal");
  if (!modal) return;

  const numeroPedido = "SP" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById("numero-pedido").textContent = numeroPedido;
  modal.classList.add("open");

  carrinho = [];
  cupomAtivo = null;
  localStorage.removeItem(CHAVE_CARRINHO);
  localStorage.removeItem(CHAVE_CUPOM);
  atualizarContador();
  carregarCarrinho();
}

function fecharModalCheckout() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.remove("open");
  window.location.href = "index.html";
}

/* ---------- toast ---------- */

function mostrarToast(mensagem) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = mensagem;
  toast.classList.add("show");

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("show"), 2500);
}

/* ---------- eventos gerais ---------- */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("checkout-modal");
    if (modal && modal.classList.contains("open")) fecharModalCheckout();
  }
  if (e.key === "Enter" && e.target && e.target.id === "cupom-input") {
    e.preventDefault();
    aplicarCupom();
  }
});

/* Mantém várias abas sincronizadas */
window.addEventListener("storage", (e) => {
  if (e.key === CHAVE_CARRINHO) {
    carrinho = normalizarCarrinho(lerStorage(CHAVE_CARRINHO, []));
    atualizarContador();
    carregarCarrinho();
  }
});

/* Grava a versão normalizada (migra carrinhos antigos) e atualiza o contador */
salvarStorage(CHAVE_CARRINHO, carrinho);
atualizarContador();

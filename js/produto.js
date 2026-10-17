/* =========================================================
   SPORTSTYLE — PÁGINA DE DETALHES DO PRODUTO
   ========================================================= */

function htmlOpcoes(valores, grupo) {
  return valores.map((v, i) => `
    <button type="button" class="pill ${i === 0 ? "selected" : ""}" data-valor="${esc(v)}" aria-pressed="${i === 0}">${esc(v)}</button>
  `).join("");
}

function ativarOpcoes(containerId, aoSelecionar) {
  const container = document.getElementById(containerId);
  container.addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    container.querySelectorAll(".pill").forEach(p => {
      p.classList.remove("selected");
      p.setAttribute("aria-pressed", "false");
    });
    pill.classList.add("selected");
    pill.setAttribute("aria-pressed", "true");
    aoSelecionar(pill.dataset.valor);
  });
}

function inicializarPaginaProduto() {
  const container = document.getElementById("produto-detalhe");
  if (!container) return;

  const produto = getProdutoPorId(getParametroURL("id"));
  const tituloRelacionados = document.querySelector(".relacionados-titulo");
  const gridRelacionados = document.getElementById("produtos-relacionados");

  if (!produto) {
    document.title = "Produto não encontrado | SportStyle";
    container.innerHTML = `
      <div class="empty-state">
        <p>Produto não encontrado.</p>
        <a href="masculino.html" class="btn">Voltar ao Catálogo</a>
      </div>
    `;
    if (tituloRelacionados) tituloRelacionados.style.display = "none";
    if (gridRelacionados) gridRelacionados.style.display = "none";
    return;
  }

  document.title = `${produto.nome} | SportStyle`;

  const breadcrumb = document.getElementById("breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Início</a> /
      <a href="masculino.html">Catálogo</a> /
      <a href="masculino.html?categoria=${encodeURIComponent(produto.categoria)}">${esc(rotuloCategoria(produto.categoria))}</a> /
      ${esc(produto.nome)}
    `;
  }

  const parcelas = textoParcelamento(produto.preco);

  container.innerHTML = `
    <div class="produto-galeria">
      <img src="${produto.imagem}" alt="${esc(produto.nome)}" onerror="imgFallback(this)">
    </div>

    <div class="produto-info">
      <p class="produto-categoria-tag">${esc(produto.marca)} · ${esc(rotuloCategoria(produto.categoria))}</p>
      <h1>${esc(produto.nome)}</h1>

      <div class="product-rating produto-rating-grande">
        ${gerarEstrelas(produto.rating)}
        <span class="rating-count">${produto.rating.toFixed(1).replace(".", ",")} · ${produto.avaliacoes} avaliações</span>
      </div>

      <p class="produto-preco">${formatarPreco(produto.preco)}</p>
      ${parcelas ? `<p class="produto-parcelas">${parcelas}</p>` : ""}
      <p class="produto-descricao">${esc(produto.descricao)}</p>

      <div class="produto-opcao" role="group" aria-labelledby="rotulo-tamanho">
        <span class="opcao-rotulo" id="rotulo-tamanho">Tamanho</span>
        <div class="opcoes-pills" id="opcoes-tamanho">${htmlOpcoes(produto.tamanhos)}</div>
      </div>

      <div class="produto-opcao" role="group" aria-labelledby="rotulo-cor">
        <span class="opcao-rotulo" id="rotulo-cor">Cor</span>
        <div class="opcoes-pills" id="opcoes-cor">${htmlOpcoes(produto.cores)}</div>
      </div>

      <div class="produto-opcao">
        <span class="opcao-rotulo">Quantidade</span>
        <div class="qty-control qty-control-produto">
          <button type="button" id="qtd-menos" aria-label="Diminuir quantidade">−</button>
          <span id="qtd-valor" aria-live="polite">1</span>
          <button type="button" id="qtd-mais" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>

      <button type="button" class="btn btn-comprar-produto" id="btn-add-carrinho">Adicionar ao Carrinho</button>

      <div class="produto-beneficios">
        <p>🚚 Entrega para todo o Brasil · frete grátis acima de ${formatarPreco(FRETE_GRATIS_ACIMA)}</p>
        <p>🔄 Troca grátis em até 30 dias</p>
        <p>🔒 Compra 100% segura</p>
      </div>
    </div>
  `;

  let quantidade = 1;
  let tamanhoSelecionado = produto.tamanhos[0];
  let corSelecionada = produto.cores[0];
  const qtdValor = document.getElementById("qtd-valor");

  ativarOpcoes("opcoes-tamanho", v => { tamanhoSelecionado = v; });
  ativarOpcoes("opcoes-cor", v => { corSelecionada = v; });

  document.getElementById("qtd-menos").addEventListener("click", () => {
    if (quantidade > 1) {
      quantidade--;
      qtdValor.textContent = quantidade;
    }
  });

  document.getElementById("qtd-mais").addEventListener("click", () => {
    if (quantidade < QTD_MAX) {
      quantidade++;
      qtdValor.textContent = quantidade;
    } else {
      mostrarToast(`Limite de ${QTD_MAX} unidades por item.`);
    }
  });

  document.getElementById("btn-add-carrinho").addEventListener("click", () => {
    adicionarCarrinho(produto.id, tamanhoSelecionado, corSelecionada, quantidade);
  });

  renderizarRelacionados(produto);
}

/* Relacionados: mesma categoria, priorizando a mesma marca */
function renderizarRelacionados(produtoAtual) {
  const container = document.getElementById("produtos-relacionados");
  if (!container) return;

  const relacionados = todosProdutos
    .filter(p => p.categoria === produtoAtual.categoria && p.id !== produtoAtual.id)
    .sort((a, b) => (b.marca === produtoAtual.marca) - (a.marca === produtoAtual.marca))
    .slice(0, 4);

  const titulo = document.querySelector(".relacionados-titulo");
  if (!relacionados.length) {
    if (titulo) titulo.style.display = "none";
    container.style.display = "none";
    return;
  }

  renderizarProdutos(relacionados, "produtos-relacionados");
}

document.addEventListener("DOMContentLoaded", inicializarPaginaProduto);

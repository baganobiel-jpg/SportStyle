/* =========================================================
   SPORTSTYLE — BUSCA E FILTROS
   ========================================================= */

const PRODUTOS_POR_PAGINA = 24;

function getParametroURL(nome) {
  return new URLSearchParams(window.location.search).get(nome);
}

/* Remove acentos e maiúsculas: "Calça" == "calca" */
function normalizarTexto(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const _cacheBusca = new Map();
function textoBuscavel(produto) {
  if (!_cacheBusca.has(produto.id)) {
    _cacheBusca.set(produto.id, normalizarTexto(
      [produto.nome, produto.marca, rotuloCategoria(produto.categoria), produto.cores.join(" ")].join(" ")
    ));
  }
  return _cacheBusca.get(produto.id);
}

/* Marcas do catálogo: por nº de produtos (esteira) ou em ordem alfabética (filtro) */
function getMarcasDisponiveis(ordem) {
  const contagem = {};
  todosProdutos.forEach(p => {
    contagem[p.marca] = (contagem[p.marca] || 0) + 1;
  });
  const marcas = Object.keys(contagem);
  return ordem === "alfabetica"
    ? marcas.sort((a, b) => a.localeCompare(b, "pt-BR"))
    : marcas.sort((a, b) => contagem[b] - contagem[a]);
}

/* ---------- busca do cabeçalho ---------- */

function configurarBuscaHeader() {
  const form = document.getElementById("search-form");
  if (!form) return;

  const campo = document.getElementById("search-input");
  const termoURL = getParametroURL("busca");
  if (termoURL && campo) campo.value = termoURL;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const termo = campo.value.trim();
    if (!termo) return;

    /* Já estamos no catálogo: filtra na hora, sem recarregar */
    const filtroBusca = document.getElementById("filtro-busca");
    if (document.getElementById("catalogo-grid") && filtroBusca) {
      filtroBusca.value = termo;
      filtroBusca.dispatchEvent(new Event("input", { bubbles: true }));
      document.getElementById("catalogo-grid").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.href = `masculino.html?busca=${encodeURIComponent(termo)}`;
  });
}

document.addEventListener("DOMContentLoaded", configurarBuscaHeader);

/* ---------- catálogo (masculino.html) ---------- */

function inicializarCatalogo() {
  const grid = document.getElementById("catalogo-grid");
  if (!grid) return;

  const inputBusca = document.getElementById("filtro-busca");
  const selectCategoria = document.getElementById("filtro-categoria");
  const selectMarca = document.getElementById("filtro-marca");
  const selectPreco = document.getElementById("filtro-preco");
  const selectOrdenar = document.getElementById("filtro-ordenar");
  const contador = document.getElementById("contador-resultados");
  const botaoMais = document.getElementById("btn-mais");
  const botaoLimpar = document.getElementById("btn-limpar");
  const bannerTitulo = document.getElementById("banner-titulo");

  let limite = PRODUTOS_POR_PAGINA;

  /* Marcas no select */
  if (selectMarca && selectMarca.options.length <= 1) {
    getMarcasDisponiveis("alfabetica").forEach(marca => {
      const opt = document.createElement("option");
      opt.value = marca;
      opt.textContent = marca;
      selectMarca.appendChild(opt);
    });
  }

  /* Valores vindos da URL (só aceita os que existem nas listas) */
  const buscaURL = getParametroURL("busca");
  if (buscaURL && inputBusca) inputBusca.value = buscaURL;

  [["categoria", selectCategoria], ["marca", selectMarca]].forEach(([param, select]) => {
    const valor = getParametroURL(param);
    if (valor && select && Array.from(select.options).some(o => o.value === valor)) {
      select.value = valor;
    }
  });

  function filtrar() {
    let resultado = [...todosProdutos];

    const termos = normalizarTexto(inputBusca?.value || "").split(/\s+/).filter(Boolean);
    if (termos.length) {
      resultado = resultado.filter(p => termos.every(t => textoBuscavel(p).includes(t)));
    }

    const categoria = selectCategoria?.value;
    if (categoria && categoria !== "todas") {
      resultado = resultado.filter(p => p.categoria === categoria);
    }

    const marca = selectMarca?.value;
    if (marca && marca !== "todas") {
      resultado = resultado.filter(p => p.marca === marca);
    }

    const faixa = selectPreco?.value;
    if (faixa && faixa !== "todas") {
      const [min, max] = faixa.split("-").map(Number);
      resultado = resultado.filter(p => p.preco >= min && (max ? p.preco <= max : true));
    }

    switch (selectOrdenar?.value) {
      case "menor-preco": resultado.sort((a, b) => a.preco - b.preco); break;
      case "maior-preco": resultado.sort((a, b) => b.preco - a.preco); break;
      case "mais-avaliados": resultado.sort((a, b) => b.avaliacoes - a.avaliacoes); break;
    }

    return resultado;
  }

  function atualizarURL() {
    const params = new URLSearchParams();
    if (inputBusca?.value.trim()) params.set("busca", inputBusca.value.trim());
    if (selectCategoria?.value && selectCategoria.value !== "todas") params.set("categoria", selectCategoria.value);
    if (selectMarca?.value && selectMarca.value !== "todas") params.set("marca", selectMarca.value);
    const query = params.toString();
    history.replaceState(null, "", window.location.pathname + (query ? "?" + query : ""));
  }

  function atualizarBanner() {
    if (!bannerTitulo) return;
    const cat = selectCategoria?.value;
    const marca = selectMarca?.value;
    if (marca && marca !== "todas") bannerTitulo.textContent = marca;
    else if (cat && cat !== "todas") bannerTitulo.textContent = rotuloCategoria(cat);
    else bannerTitulo.textContent = "Nova Coleção 2026";
  }

  function aplicarFiltros() {
    const resultado = filtrar();
    const visiveis = resultado.slice(0, limite);

    if (contador) {
      const n = resultado.length;
      contador.textContent = `${n} produto${n !== 1 ? "s" : ""} encontrado${n !== 1 ? "s" : ""}`;
    }

    renderizarProdutos(visiveis, "catalogo-grid");

    if (botaoMais) {
      botaoMais.style.display = resultado.length > limite ? "" : "none";
      botaoMais.textContent = `Ver mais produtos (${resultado.length - limite} restantes)`;
    }

    atualizarBanner();
    atualizarURL();
  }

  /* Mudou qualquer filtro → volta para a primeira página de resultados */
  [inputBusca, selectCategoria, selectMarca, selectPreco, selectOrdenar].forEach(el => {
    if (el) el.addEventListener("input", () => { limite = PRODUTOS_POR_PAGINA; aplicarFiltros(); });
  });

  if (botaoMais) {
    botaoMais.addEventListener("click", () => { limite += PRODUTOS_POR_PAGINA; aplicarFiltros(); });
  }

  if (botaoLimpar) {
    botaoLimpar.addEventListener("click", () => {
      if (inputBusca) inputBusca.value = "";
      [selectCategoria, selectMarca, selectPreco].forEach(s => { if (s) s.value = "todas"; });
      if (selectOrdenar) selectOrdenar.value = "relevancia";
      const headerInput = document.getElementById("search-input");
      if (headerInput) headerInput.value = "";
      limite = PRODUTOS_POR_PAGINA;
      aplicarFiltros();
    });
  }

  aplicarFiltros();
}

document.addEventListener("DOMContentLoaded", inicializarCatalogo);

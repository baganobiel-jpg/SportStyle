/* =========================================================
   SPORTSTYLE — AUTENTICAÇÃO (localStorage)
   Login/cadastro de demonstração, sem servidor.
   A senha nunca é guardada em texto puro: salvamos um hash SHA-256.
   (Em um sistema real isso seria feito no back-end.)
   ========================================================= */

const AUTH_USUARIOS = "usuarios";
const AUTH_LOGADO = "usuarioLogado";
const SENHA_MIN = 6;

function lerJSON(chave, padrao) {
  try {
    const valor = JSON.parse(localStorage.getItem(chave));
    return valor === null || valor === undefined ? padrao : valor;
  } catch (e) {
    return padrao;
  }
}

function getUsuarios() {
  const lista = lerJSON(AUTH_USUARIOS, []);
  return Array.isArray(lista) ? lista : [];
}

function salvarUsuarios(usuarios) {
  localStorage.setItem(AUTH_USUARIOS, JSON.stringify(usuarios));
}

function getUsuarioLogado() {
  const u = lerJSON(AUTH_LOGADO, null);
  return u && u.nome && u.email ? u : null;
}

/* ---------- hash de senha ---------- */

async function hashSenha(senha, email) {
  const texto = `sportstyle::${email}::${senha}`;

  if (window.crypto && window.crypto.subtle) {
    const buffer = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto));
    return "sha256:" + Array.from(new Uint8Array(buffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  /* Reserva para navegadores sem crypto.subtle (ex.: página aberta sem HTTPS) */
  let h = 5381;
  for (let i = 0; i < texto.length; i++) h = ((h << 5) + h + texto.charCodeAt(i)) | 0;
  return "djb2:" + (h >>> 0).toString(16);
}

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/* ---------- cadastro / login / logout ---------- */

async function cadastrarUsuario(nome, email, senha) {
  nome = (nome || "").trim();
  email = (email || "").trim().toLowerCase();

  if (nome.length < 2) return { sucesso: false, mensagem: "Informe seu nome completo." };
  if (!emailValido(email)) return { sucesso: false, mensagem: "Informe um e-mail válido." };
  if ((senha || "").length < SENHA_MIN) {
    return { sucesso: false, mensagem: `A senha precisa ter pelo menos ${SENHA_MIN} caracteres.` };
  }

  const usuarios = getUsuarios();
  if (usuarios.some(u => u.email === email)) {
    return { sucesso: false, mensagem: "Este e-mail já está cadastrado." };
  }

  usuarios.push({ nome, email, senhaHash: await hashSenha(senha, email) });
  salvarUsuarios(usuarios);

  localStorage.setItem(AUTH_LOGADO, JSON.stringify({ nome, email }));
  return { sucesso: true };
}

async function loginUsuario(email, senha) {
  email = (email || "").trim().toLowerCase();
  const usuarios = getUsuarios();
  const indice = usuarios.findIndex(u => (u.email || "").toLowerCase() === email);
  const usuario = usuarios[indice];

  let ok = false;
  if (usuario) {
    if (usuario.senhaHash) {
      ok = usuario.senhaHash === await hashSenha(senha, email);
    } else if (usuario.senha !== undefined && usuario.senha === senha) {
      /* Conta antiga (senha em texto puro): confere e converte para hash */
      ok = true;
      usuarios[indice] = { nome: usuario.nome, email, senhaHash: await hashSenha(senha, email) };
      salvarUsuarios(usuarios);
    }
  }

  if (!ok) return { sucesso: false, mensagem: "E-mail ou senha incorretos." };

  localStorage.setItem(AUTH_LOGADO, JSON.stringify({ nome: usuario.nome, email }));
  return { sucesso: true };
}

function logoutUsuario() {
  localStorage.removeItem(AUTH_LOGADO);
  window.location.href = "index.html";
}

/* Destino após o login: só aceita páginas do próprio site */
function getDestinoPosLogin() {
  const destino = new URLSearchParams(window.location.search).get("redirect") || "";
  return /^[a-z0-9_-]+\.html(\?[\w=&%.-]*)?$/i.test(destino) ? destino : "index.html";
}

/* ---------- cabeçalho ---------- */

function atualizarHeaderUsuario() {
  const usuario = getUsuarioLogado();
  const slot = document.getElementById("user-slot");
  if (!slot) return;

  if (!usuario) {
    slot.innerHTML = `<a href="login.html" class="login-link">Entrar</a>`;
    return;
  }

  const primeiroNome = usuario.nome.split(" ")[0];
  slot.innerHTML = `
    <div class="user-menu">
      <button type="button" class="user-btn" id="user-btn" aria-haspopup="true" aria-expanded="false">
        <span class="user-avatar">${esc(primeiroNome.charAt(0).toUpperCase())}</span>
        ${esc(primeiroNome)}
      </button>
      <div class="user-dropdown" id="user-dropdown">
        <a href="#" id="logout-link">Sair</a>
      </div>
    </div>
  `;

  const botao = document.getElementById("user-btn");
  const menu = document.getElementById("user-dropdown");

  function alternar(abrir) {
    const aberto = abrir === undefined ? !menu.classList.contains("open") : abrir;
    menu.classList.toggle("open", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
  }

  botao.addEventListener("click", (e) => { e.stopPropagation(); alternar(); });
  document.addEventListener("click", () => alternar(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") alternar(false); });

  document.getElementById("logout-link").addEventListener("click", (e) => {
    e.preventDefault();
    logoutUsuario();
  });
}

document.addEventListener("DOMContentLoaded", atualizarHeaderUsuario);

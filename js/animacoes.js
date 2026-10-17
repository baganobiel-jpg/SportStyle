/* =========================================================
   SPORTSTYLE — ANIMAÇÕES E INTERFACE
   Reveal ao scroll, hero slideshow, header e menu ativo.
   Sem bibliotecas externas.
   ========================================================= */

/* ---------- reveal ao scroll ---------- */

function inicializarReveal() {
  const elementos = document.querySelectorAll(".reveal");
  if (!elementos.length) return;

  /* Sem suporte (ou sem JS moderno): mostra tudo */
  if (!("IntersectionObserver" in window)) {
    elementos.forEach(el => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("in");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

  elementos.forEach(el => observer.observe(el));
}

/* ---------- hero slideshow ---------- */

function inicializarHero() {
  const hero = document.getElementById("hero-slideshow");
  if (!hero) return;

  const slides = hero.querySelectorAll(".hero-slide");
  const dots = hero.querySelectorAll(".hero-dot");
  if (slides.length < 2) return;

  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let atual = 0;
  let timer = null;

  function ir(n) {
    slides[atual].classList.remove("active");
    dots[atual].classList.remove("active");
    dots[atual].removeAttribute("aria-current");
    atual = (n + slides.length) % slides.length;
    slides[atual].classList.add("active");
    dots[atual].classList.add("active");
    dots[atual].setAttribute("aria-current", "true");
  }

  function iniciar() {
    if (reduzirMovimento || timer) return;
    timer = setInterval(() => ir(atual + 1), 5000);
  }

  function parar() {
    clearInterval(timer);
    timer = null;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      parar();
      ir(Number(dot.dataset.index));
      iniciar();
    });
  });

  hero.addEventListener("mouseenter", parar);
  hero.addEventListener("mouseleave", iniciar);
  document.addEventListener("visibilitychange", () => (document.hidden ? parar() : iniciar()));

  dots[0].setAttribute("aria-current", "true");
  iniciar();
}

/* ---------- header com sombra ao rolar ---------- */

function inicializarHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const atualizar = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", atualizar, { passive: true });
  atualizar();
}

/* ---------- link ativo no menu ---------- */

function marcarMenuAtivo() {
  let pagina = window.location.pathname.split("/").pop() || "index.html";
  if (pagina === "produto.html") pagina = "masculino.html";   // produto pertence ao catálogo

  document.querySelectorAll(".menu a[href]").forEach(link => {
    const destino = link.getAttribute("href").split("?")[0];
    if (destino === pagina) link.setAttribute("aria-current", "page");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarReveal();
  inicializarHero();
  inicializarHeader();
  marcarMenuAtivo();
});

/* Proteção de retrato da ficha do Dr. Bovas contra versões antigas de app.js em cache. */
(() => {
  function atualizarRetratoBovas() {
    if (typeof BOVAS_RETRATO_HD !== 'string' || !BOVAS_RETRATO_HD.startsWith('data:image/webp;base64,')) return;
    const main = document.getElementById('content');
    if (!main) return;
    // Modifica SOMENTE o retrato dentro da credencial integral, nunca outros retratos.
    const img = main.querySelector('.dossier-top .portrait img');
    if (!img) return;
    const isBovas = main.querySelector('.dossier-top h1')?.textContent?.trim() === 'Dr. Bovas';
    if (!isBovas) return;
    if (img.getAttribute('src') !== BOVAS_RETRATO_HD) img.setAttribute('src', BOVAS_RETRATO_HD);
    img.removeAttribute('onerror');
    img.setAttribute('alt', 'Dr. Bovas com rosto preservado, jaleco científico e elementos gnósticos e brainrot');
    const caption = main.querySelector('.dossier-top .portrait figcaption');
    if (caption && caption.textContent?.includes('Foto de crachá enviada')) {
      caption.textContent = 'FIG. 02 — Reconstrução visual do Dr. Bovas: pesquisa anômala, gnosticismo e brainrot.';
    }
  }
  const main = document.getElementById('content');
  if (!main) return;
  // O roteador troca o conteúdo do <main> em cada navegação sem recarregar a página.
  new MutationObserver(() => atualizarRetratoBovas()).observe(main, { childList: true });
  atualizarRetratoBovas();
})();

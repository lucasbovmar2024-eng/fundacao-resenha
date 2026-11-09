/* Fundação Resenha — visualizador de imagens em página única.
   Funciona com conteúdo inserido por render() e preserva links de navegação textual. */
(() => {
  'use strict';
  const dialog = document.getElementById('image-lightbox');
  const media = document.getElementById('image-lightbox-media');
  const caption = document.getElementById('image-lightbox-caption');
  const count = document.getElementById('image-lightbox-count');
  const previous = document.getElementById('image-lightbox-previous');
  const next = document.getElementById('image-lightbox-next');
  const closeButton = document.getElementById('image-lightbox-close');
  const page = document.getElementById('content');
  if (!dialog || !media || !page) return;

  let images = [];
  let currentIndex = -1;
  let returnFocus = null;

  const assetLink = href => /\.(?:png|jpe?g|webp|gif|svg|avif)(?:[?#].*)?$/i.test(href || '');

  const imageRoot = image => {
    const link = image.closest('a[href]');
    // Some illustrative scenes combine a background and an overlaid character.
    // Treat this group as one image, so the overlay is not lost when enlarged.
    if (link && link.querySelectorAll('img').length > 1) return link.querySelector('img');
    return image;
  };

  function visibleImages() {
    const seen = new Set();
    return Array.from(document.querySelectorAll('#content img, #summon img')).filter(image => {
      if (image.closest('#image-lightbox, [data-no-lightbox], button, [data-summon]')) return false;
      if (!image.getAttribute('src') || image.closest('[hidden]') || !image.getClientRects().length) return false;
      const root = imageRoot(image);
      if (seen.has(root)) return false;
      seen.add(root);
      return true;
    });
  }

  function imageCaption(image) {
    const figure = image.closest('figure');
    const figcaption = figure && figure.querySelector('figcaption');
    const description = figcaption && figcaption.textContent.trim();
    return description || image.getAttribute('alt') || image.closest('a')?.getAttribute('aria-label') || 'Imagem do arquivo da Fundação Resenha';
  }

  function show(image, isFirstOpen = false) {
    if (!image) return;
    if (isFirstOpen) {
      returnFocus = document.activeElement;
      images = visibleImages();
    }
    const root = imageRoot(image);
    currentIndex = images.indexOf(root);
    const link = root.closest('a[href]');
    const nestedScene = link && link.querySelectorAll('img').length > 1
      ? link.querySelector('span[style*="position:relative"]')
      : null;

    if (nestedScene) {
      const clone = nestedScene.cloneNode(true);
      clone.classList.add('image-lightbox-composite');
      const baseImage = clone.querySelector('img');
      if (baseImage) {
        baseImage.style.width = '100%';
        baseImage.style.height = 'auto';
        baseImage.style.maxWidth = '100%';
      }
      media.replaceChildren(clone);
    } else {
      const enlarged = document.createElement('img');
      enlarged.src = (link && assetLink(link.getAttribute('href')))
        ? link.href
        : (root.currentSrc || root.src);
      enlarged.alt = root.alt || 'Imagem ampliada';
      enlarged.decoding = 'async';
      if (getComputedStyle(root).imageRendering === 'pixelated') {
        enlarged.style.imageRendering = 'pixelated';
      }
      media.replaceChildren(enlarged);
    }

    caption.textContent = imageCaption(root);
    const total = images.length;
    count.textContent = currentIndex >= 0 ? `${currentIndex + 1} / ${total}` : 'ARQUIVO VISUAL';
    previous.hidden = next.hidden = total < 2 || currentIndex < 0;
    if (!dialog.open) dialog.showModal();
    if (isFirstOpen) closeButton.focus({preventScroll: true});
  }

  function navigate(step) {
    if (!dialog.open || images.length < 2 || currentIndex < 0) return;
    show(images[(currentIndex + step + images.length) % images.length]);
  }

  // Capture image clicks before existing card links can navigate to an image file.
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element) || event.target.closest('#image-lightbox')) return;
    if (event.defaultPrevented || event.button !== 0 ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    const clickedImage = event.target.closest('img');
    const image = clickedImage ||
      (link && assetLink(link.getAttribute('href')) ? link.querySelector('img') : null);
    if (!image || image.closest('button,[data-summon],[data-no-lightbox]')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    show(image, true);
  }, true);

  function markKeyboardAccessibleImages() {
    page.querySelectorAll('img').forEach(image => {
      if (image.closest('a,button,[data-summon],[data-no-lightbox]') ||
          image.hasAttribute('tabindex')) return;
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', 'Ampliar imagem: ' +
        (image.getAttribute('alt') || 'registro visual'));
    });
  }
  markKeyboardAccessibleImages();
  new MutationObserver(markKeyboardAccessibleImages).observe(page, {childList: true, subtree: true});

  document.addEventListener('keydown', event => {
    if (dialog.open) {
      if (event.key === 'ArrowLeft') {event.preventDefault(); navigate(-1);}
      if (event.key === 'ArrowRight') {event.preventDefault(); navigate(1);}
      return; // Escape is handled natively by the dialog.
    }
    if ((event.key === 'Enter' || event.key === ' ') &&
        event.target instanceof HTMLImageElement &&
        event.target.matches('#content img[role="button"]')) {
      event.preventDefault();
      show(event.target, true);
    }
  });

  previous.addEventListener('click', () => navigate(-1));
  next.addEventListener('click', () => navigate(1));
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    // Browser fires backdrop clicks with the dialog element as the target.
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    media.replaceChildren();
    images = [];
    if (returnFocus && returnFocus.isConnected &&
        typeof returnFocus.focus === 'function') returnFocus.focus({preventScroll: true});
    returnFocus = null;
  });
  window.addEventListener('hashchange', () => {
    if (dialog.open) dialog.close();
  });
})();

import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const containerImg = document.querySelector('.gallery');
const galleryMarkup = createImgModalMarkup(galleryItems);

containerImg.insertAdjacentHTML('beforeend', galleryMarkup);

function createImgModalMarkup(imgItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
    })
    .join('');
}
// ========================================
containerImg.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isImgSwatchEl = event.target.classList.contains('gallery__image');
  //event.target.nodeName !== 'IMG'
  if (!isImgSwatchEl) {
    return;
  }
  console.log(event.target);
  // ========================================
  const modal = basicLightbox.create(
    `<img src='${event.target.dataset.source}' width="900">`
  );
  modal.show();
  // ==========================================
  window.addEventListener('keydown', onPressButtonCloce);

  function onPressButtonCloce(e) {
    if (e.code === 'Escape' && basicLightbox.visible()) {
      modal.close();
    }
  }
}

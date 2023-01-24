import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerImg = document.querySelector('.gallery');
const galleryMarkup = createImgModalMarkup(galleryItems);

containerImg.insertAdjacentHTML('beforeend', galleryMarkup);

function createImgModalMarkup(imgItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
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
  const modal = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

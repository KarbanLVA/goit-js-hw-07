import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const createGallertItemsMarkup = galleryItems.map(({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');
gallery.insertAdjacentHTML('beforeend', createGallertItemsMarkup);

gallery.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  // console.log(event.target);  
  // console.log(event.target.dataset.source);
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `)
  instance.show()
}






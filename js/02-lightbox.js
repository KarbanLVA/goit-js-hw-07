import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const createGalleryItemMarkup = galleryItems.map(({preview, original, description}) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`).join("");
galleryList.insertAdjacentHTML('beforeend',
    createGalleryItemMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});
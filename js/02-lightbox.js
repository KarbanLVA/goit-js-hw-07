import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const createGalleryItemMarkup = galleryItems.map(({preview, original, description}) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`).join("");
galleryList.insertAdjacentHTML('beforeend',
    createGalleryItemMarkup);

galleryList.addEventListener('click', onGalleryImageClick);
function onGalleryImageClick(event) {  
    event.preventDefault();
     if (!event.target.classList.contains('gallery__image')) {
    return;
     } 
}
    
    let gallery = new SimpleLightbox(".gallery a", {
captionsData: "alt",
captionDelay: 250,
});

import { galleryItems } from './gallery-items.js';
// Change code below this line
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
console.log(galleryItems);

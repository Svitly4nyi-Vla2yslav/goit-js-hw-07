import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
let currentModal = null;

function renderGallery() {
  const galleryList = galleryItems
    .map(
      item => `
    <li class='gallery__item'>
        <a class='gallery__link' href='${item.original}'>
            <img class='gallery__image'
                src='${item.preview}'
                data-source='${item.original}'
                alt='${item.description}'
            />
        </a>
    </li>
`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryList);
}

function openModal(imgSource) {
  const modal = basicLightbox.create(`
        <img src='${imgSource}' />
   `);
    modal.show();
    currentModal = modal;
    document.addEventListener('keydown', onEsc)
}


function handleGalleryClick(evt) {
  evt.preventDefault();
  const target = evt.target;
  if (target.classList.contains('gallery__image')) {
    const imgSource = target.dataset.source;
      openModal(imgSource);
  }
}
function onEsc(evt) {
  if (evt.code === 'Escape' && currentModal !== null) {
      currentModal.close();
      currentModal = null;
      document.removeEventListener('keydown', onEsc);
  }
    
  
}
document
  .querySelector('.gallery')
  .addEventListener('click', handleGalleryClick);
window.addEventListener('DOMContentLoaded', renderGallery);
console.log(galleryItems);

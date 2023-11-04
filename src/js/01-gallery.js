import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryImages = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-title="${description}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join('');
gallery.insertAdjacentHTML('beforeEnd', galleryImages);

let imgGallary = new SimpleLightbox('.gallery a', {
  captionType: 'data',
  captionDelay: 250,
});

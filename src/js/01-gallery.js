import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
console.log(createImageCardsMarkup(galleryItems));
console.log(galleryContainer);
console.log(galleryItems);

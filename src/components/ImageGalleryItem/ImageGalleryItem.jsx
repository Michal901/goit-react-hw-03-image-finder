import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imgArr, onClick }) {
  return imgArr.map((image, index) => (
    <li key={`${image.id}-${index}`} className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={image.largeImageURL}
        alt={image.tags}
        onClick={() => onClick(image)}
      />
    </li>
  ));
}

import styles from '../ImageGallery/ImageGallery.module.css';
export default function ImageGallery({ children }) {
  return <ul className={styles.ImageGallery}>{children}</ul>;
}

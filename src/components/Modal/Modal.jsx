import { useEffect } from 'react';
import styles from '../Modal/Modal.module.css';

export default function Modal({ selectedImage, onClose }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    selectedImage && (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>
          <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
        </div>
      </div>
    )
  );
}

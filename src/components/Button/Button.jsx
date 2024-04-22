import styles from '../Button/Button.module.css';

export default function Button({ onClick }) {
  return (
    <>
      <button className={styles.Button} onClick={onClick}>
        Load more
      </button>
    </>
  );
}

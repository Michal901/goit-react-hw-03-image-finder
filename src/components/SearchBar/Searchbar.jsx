import { useState } from 'react';
import styles from './Searchbar.module.css';

import { IoSearchOutline } from 'react-icons/io5';

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span>
            <IoSearchOutline className={styles.SearchFormButtonIcon} />
          </span>
        </button>

        <input
          onChange={e => {
            setInputValue(e.target.value);
          }}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

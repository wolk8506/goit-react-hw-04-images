import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import s from 'components/Searchbar/Searchbar.module.css';
import { useState } from 'react';

export function Searchbar({ onSubmit }) {
  const [images, setImages] = useState('');

  const handleNameChange = e => {
    setImages(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (images.trim() === '') {
      toast.error('Enter a valid request!');
      return;
    }
    setImages('');
    onSubmit(images);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm}>
        <button
          type="submit"
          className={s.SearchFormButton}
          onClick={handleSubmit}
        >
          <ImSearch />
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          placeholder="Search images and photos"
          value={images}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

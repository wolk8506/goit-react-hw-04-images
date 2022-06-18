import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from 'components/ImageGallery/ImageGallery.module.css';
import { useState, useEffect } from 'react';

export function ImageGallery({
  toggleModal,
  qImages,
  page,
  perPage,
  pagePagination,
  toggleLoader,
}) {
  const [imagesQury, setImagesQury] = useState('');
  const [toggleLoad, setToggleLoad] = useState(false);
  const [pagePaginationTotal, setPagePaginationTotal] = useState(false);

  useEffect(() => {
    if (qImages !== '') {
      setToggleLoad(true);
      fetch(
        `https://pixabay.com/api/?key=25582463-bd7a1371f0d74f28c5559b6f0&q=${qImages}&image_type=photo&page=${page}&per_page=${perPage}`
      )
        .then(res => res.json())
        .then(res => {
          setPagePaginationTotal(Math.ceil(res.total / perPage));
          if (page > 1) {
            setImagesQury(prevImagesQury => [...prevImagesQury, ...res.hits]);
          } else setImagesQury(res.hits);
        })
        .finally(() => {
          if (page === 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          setToggleLoad(false);
        });
    }
  }, [qImages, page, perPage]);

  useEffect(() => {
    toggleLoader(toggleLoad);
  });

  useEffect(() => {
    pagePagination(false);
    if (pagePaginationTotal > 2) {
      pagePagination(true);
    }
    if (page === pagePaginationTotal) {
      pagePagination(false);
    }
  });

  return (
    <ul className={s.ImageGallery}>
      {imagesQury &&
        imagesQury.map(i => (
          <ImageGalleryItem
            key={i.id}
            url={i.largeImageURL}
            src={i.webformatURL}
            toggleModal={toggleModal}
            alt={i.tags}
          />
        ))}
    </ul>
  );
}

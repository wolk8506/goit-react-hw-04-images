import s from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export function ImageGalleryItem({ id, src, alt, toggleModal, url }) {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItem_image}
        src={src}
        alt={alt}
        onClick={toggleModal}
        id={url}
      />
    </li>
  );
}

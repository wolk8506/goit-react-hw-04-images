import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';
import s from 'components/App.module.css';
import { useState } from 'react';

export function App() {
  const [images, setImages] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [imgModal, setImgModal] = useState('');
  const perPage = 12;
  const [PagePaginationTotal, setPagePaginationTotal] = useState(false);

  const toggleModal = e => {
    setShowModal(!showModal);
    if (!showModal) {
      setImgModal(e.target.id);
    }
  };

  const toggleLoader = showLoader => {
    setShowLoader(showLoader);
  };

  const handlePagePagination = data => {
    setPagePaginationTotal(data);
  };

  const handlePage = () => {
    setPage(prevState => prevState + 1);
  };

  const handleFormSubmit = images => {
    setImages(images);
    setPage(1);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        pagePagination={handlePagePagination}
        qImages={images}
        page={page}
        toggleModal={toggleModal}
        toggleLoader={toggleLoader}
        perPage={perPage}
      />
      {showLoader && <Loader />}
      {PagePaginationTotal && <Button onClick={handlePage} />}
      {showModal && <Modal toggleModal={toggleModal} imgModal={imgModal} />}
      <ToastContainer />
    </div>
  );
}

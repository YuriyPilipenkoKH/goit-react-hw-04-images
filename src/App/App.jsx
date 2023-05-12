import React, { useState, useEffect } from 'react';
import { Container } from 'components/Container/Container';
import Notiflix from 'notiflix';
import Button from 'components/Button/Button';
import { iconLoader } from 'utils/svgIcons';
import Searchbar  from 'components/Searchbar/Searchbar';
import { fetchCard } from 'servises/fetch';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
// import ToTopButton from 'components/ToTopButton/ToTopButton';

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImgUrl, setLargeImgUrl] = useState('');
  const [error, setError] = useState(null);
  // const [notification, setNotification] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  const handleSubmit = (query) => {
    if (query === '') {
      Notiflix.Notify.failure(
        'The search string cannot be empty. Please specify your search query.'
      );
      setItems([]);
      setShowBtn(false);
      return;
    }

    setQuery(query);
    setItems([]);
    setPage(1);
    setLoading(true);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
  };

  const onClickImg = (url) => {
    setShowModal(true);
    setLargeImgUrl(url);
  };

  const onModalClose = () => {
    setShowModal(false);
    setLargeImgUrl('');
  };

  useEffect(() => {
    if (query === '') return;

    const fetchGallery = async () => {
      try {
        const response = await fetchCard(query, page, perPage);
        setItems((prevItems) => [...prevItems, ...response]);
        setLoading(false);

        if (response.length < 12) {
          setShowBtn(false);
        }
        if (response.length === 12) {
          setShowBtn(true);
        }
        if (response.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        Notiflix.Notify.failure('Sorry, Page not found. Please try again.');
        setError(error);
        setLoading(false);
      }
    };

    fetchGallery();
  }, [query, page, perPage]);

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery onClickImg={onClickImg} images={items} />

      {showBtn  && (
        <Button onClick={onLoadMore}>
          {iconLoader}
          Load More
        </Button>
      )}

      {showModal && (
        <Modal onModalClose={onModalClose} picture={largeImgUrl} />
      )}
      {loading && <Loader />}
      {/* {showBtn && <ToTopButton />} */}

      {error && <p>Error: {error.message}</p>}
    </Container>
  );
};

export default App;
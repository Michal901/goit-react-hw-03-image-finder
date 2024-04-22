import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Modal from './components/Modal/Modal';
import SearchBar from './components/SearchBar/Searchbar';
import { fetchImages } from './API';
import Loader from 'components/Loader/Loader';

export const App = ({ inputValue }) => {
  const [imgArr, setImgArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('puppy');
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let isCancelled = false;

    setIsLoading(true);
    fetchImages(query, page)
      .then(images => {
        if (!isCancelled) {
          if (page === 1) {
            setImgArr(images);
          } else {
            setImgArr(prevImages => [...prevImages, ...images]);
          }
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [query, page]);

  const handleSearchSubmit = inputValue => {
    setQuery(inputValue);
    setPage(1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Modal selectedImage={selectedImage} onClose={handleCloseModal} />

      <div>
        <ImageGallery>
          {isLoading ? (
            <Loader />
          ) : (
            <ImageGalleryItem imgArr={imgArr} onClick={handleImageClick} />
          )}
        </ImageGallery>
        {imgArr.length > 0 && <Button onClick={handleLoadMore} />}
      </div>
    </div>
  );
};

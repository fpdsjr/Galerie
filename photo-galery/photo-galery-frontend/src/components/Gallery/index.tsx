/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';

import { ImageInfoProvider } from '../../context/ImageInfoProvider';
import useHandleModal from '../../hooks/useHandleModal';
import { Api } from '../../services/api';
import ImageModal from '../ImageModal';
import Thumbnail from '../Thumbnail';
import { Container } from './styles';

function Gallery() {
  const [images, setImages] = useState([]);

  const { isModalOpen, handleOpenModal, handleCloseModal } = useHandleModal();

  async function fetchImages() {
    const { data } = await Api.get('/list/images');
    setImages(data);
  }

  useEffect(() => {
    fetchImages();
  }, [isModalOpen]);

  return (
    <ImageInfoProvider>
      <Container
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
        {images.map(({ id, url, name, short_url, key }) => (
          <Thumbnail
            key={id}
            imageInfos={{ url, name, short_url, key }}
            handleOpenImageModal={handleOpenModal}
          />
        ))}
        <ImageModal
          isImageModalOpen={isModalOpen}
          handleCloseImageModal={handleCloseModal}
        />
      </Container>
    </ImageInfoProvider>
  );
}

export default Gallery;

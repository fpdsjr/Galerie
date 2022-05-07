/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';

import { ImageInfoProvider } from '../../context/ImageInfoProvider';
import useFetch from '../../hooks/useFetch';
import useHandleModal from '../../hooks/useHandleModal';
import ImageModal from '../ImageModal';
import Thumbnail from '../Thumbnail';
import { Container } from './styles';

interface IListImagesRequest {
  id: number;
  url: string;
  name: string;
  short_url: string;
  key: string;
}

function Gallery() {
  const [images, setImages] = useState<IListImagesRequest[]>([]);

  const { isModalOpen, handleOpenModal, handleCloseModal } = useHandleModal();

  async function fetchImages() {
    const { axiosResponse } = useFetch(0, '/list/images');
    setImages(axiosResponse?.data);
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

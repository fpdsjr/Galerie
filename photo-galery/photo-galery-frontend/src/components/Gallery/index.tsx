/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import ImageModal from '../ImageModal';
import Thumbnail from '../Thumbnail';
import { Container } from './styles';

const images = [
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
];

function Gallery() {
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  function handleOpenUploadModal() {
    setIsImageModalOpen(true);
  }

  function handleCloseUploadModal() {
    setIsImageModalOpen(false);
  }

  return (
    <div>
      <Container
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
        {images.map((id, i) => (
          <Thumbnail
            key={i}
            id={id}
            i={i}
            handleOpenUploadModal={handleOpenUploadModal}
          />
        ))}
        <ImageModal
          isImageModalOpen={isImageModalOpen}
          handleCloseUploadModal={handleCloseUploadModal}
        />
      </Container>
    </div>
  );
}

export default Gallery;

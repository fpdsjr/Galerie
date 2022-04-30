/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import ImageModal from '../ImageModal';
import Thumbnail from '../Thumbnail';
import { Container } from './styles';

const images = [
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://images.unsplash.com/photo-1651169611357-7ded6b5eeda5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://images.unsplash.com/photo-1650542907928-035867ff42c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://images.unsplash.com/photo-1650740594741-188ae4fb80b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  'https://images.unsplash.com/photo-1651103324215-a9bb366749c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1650937727848-04f9eab4cbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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
    <Container
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
      {images.map((id, i) => (
        <Thumbnail
          key={id}
          id={id}
          i={i}
          src={images[i]}
          handleOpenUploadModal={handleOpenUploadModal}
        />
      ))}
      <ImageModal
        isImageModalOpen={isImageModalOpen}
        handleCloseUploadModal={handleCloseUploadModal}
      />
    </Container>
  );
}

export default Gallery;

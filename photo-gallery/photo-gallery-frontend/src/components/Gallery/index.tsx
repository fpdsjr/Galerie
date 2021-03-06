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

interface IGalleryProps {
  galleryImages: IListImagesRequest[];
}

function Gallery({ galleryImages }: IGalleryProps) {
  const {
    isModalOpen: isImageModalOpen,
    handleOpenModal: handleOpenImageModal,
    handleCloseModal: handleCloseImageModal,
  } = useHandleModal();

  return (
    <Container
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
      {galleryImages.map(({ id, url, name, short_url, key }) => (
        <Thumbnail
          key={id}
          imageInfos={{ id, url, name, short_url, key }}
          handleOpenImageModal={handleOpenImageModal}
        />
      ))}
      <ImageModal
        isImageModalOpen={isImageModalOpen}
        handleCloseImageModal={handleCloseImageModal}
      />
    </Container>
  );
}

export default Gallery;

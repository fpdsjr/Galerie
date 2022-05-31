import { saveAs } from 'file-saver';
import { AiFillDelete } from 'react-icons/ai';
import { FcCheckmark } from 'react-icons/fc';
import { FiDownload } from 'react-icons/fi';
import { IoIosShareAlt } from 'react-icons/io';
import Modal from 'react-modal';

import { useImage } from '../../context/ImageInfoProvider/useImage';
import { useClipboard } from '../../hooks/useClipboard';
import useImageClick from '../../hooks/useImageClick';
import { Api } from '../../services/api';
import { Container, ButtonsContainer, ModalImage, Button } from './styles';

interface IImageModalProps {
  isImageModalOpen: boolean;
  handleCloseImageModal: () => void;
}

function ImageModal({
  isImageModalOpen,
  handleCloseImageModal,
}: IImageModalProps) {
  const { ImageInfo, setDeletedId } = useImage();
  const { imageClick, handleImageClick } = useImageClick(isImageModalOpen);
  const { isCopied, copyToClipboard } = useClipboard({ handleCloseImageModal });

  function handleDownload() {
    saveAs(ImageInfo!.url, `${ImageInfo?.name}`);
  }

  async function handleDelete() {
    await Api.post('/delete', { name: ImageInfo?.name });
    handleCloseImageModal();
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className={
        imageClick ? 'react-modal-image-modal-size' : 'react-modal-image-modal'
      }
      isOpen={isImageModalOpen}
      onRequestClose={handleCloseImageModal}>
      <Container>
        <ButtonsContainer>
          <Button
            type="button"
            onClick={() => {
              handleDelete();
              setDeletedId(ImageInfo?.id);
            }}>
            <AiFillDelete size={20} />
            Delete
          </Button>
          <div>
            <Button
              type="button"
              onClick={() => copyToClipboard(ImageInfo!.short_url)}>
              {isCopied ? (
                <FcCheckmark size={20} />
              ) : (
                <IoIosShareAlt size={20} />
              )}
              {isCopied ? 'Copied' : 'Share'}
            </Button>

            <Button type="button" onClick={() => handleDownload()}>
              <FiDownload size={20} />
              Download
            </Button>
          </div>
        </ButtonsContainer>
        <ModalImage
          imageClick={imageClick}
          onClick={() => handleImageClick()}
          src={ImageInfo?.url}
          alt="alt"
        />
      </Container>
    </Modal>
  );
}

export default ImageModal;

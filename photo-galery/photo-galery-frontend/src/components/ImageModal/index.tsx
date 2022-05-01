import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { IoIosShareAlt } from 'react-icons/io';
import Modal from 'react-modal';
import { useCopyToClipboard } from 'react-use';

import { useImage } from '../../context/ImageInfoProvider/useImage';
import { Container, ButtonsContainer, ModalImage, ShareButton } from './styles';

interface IImageModalProps {
  isImageModalOpen: boolean;
  handleCloseUploadModal: () => void;
}

function ImageModal({
  isImageModalOpen,
  handleCloseUploadModal,
}: IImageModalProps) {
  const [imageClick, setImageClick] = useState(false);
  const [text, setText] = useState('');
  const [state, copyToClipboard] = useCopyToClipboard();

  const image = useImage();
  const { ImageInfo } = image;

  function handleImageClick() {
    setImageClick(!imageClick);
  }

  function handleClipBoardText() {
    setText(
      'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    );
  }

  const handleDownload = () => {
    saveAs(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/200px-PNG_transparency_demonstration_1.png',
      'image/*',
    );
  };

  useEffect(() => {
    handleClipBoardText();
  }, []);

  useEffect(() => {
    copyToClipboard('');
  }, [handleCloseUploadModal]);

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className={
        imageClick ? 'react-modal-image-modal-size' : 'react-modal-image-modal'
      }
      isOpen={isImageModalOpen}
      onRequestClose={handleCloseUploadModal}>
      <Container>
        <ButtonsContainer>
          <ShareButton type="button" onClick={() => copyToClipboard(text)}>
            {state.value ? (
              <FcCheckmark size={20} />
            ) : (
              <IoIosShareAlt size={20} />
            )}
            {state.value ? 'Copied' : 'Share'}
          </ShareButton>

          <button type="button" onClick={handleDownload}>
            Download
          </button>
        </ButtonsContainer>
        <ModalImage
          imageClick={imageClick}
          onClick={() => handleImageClick()}
          src={ImageInfo?.src}
          alt="alt"
        />
      </Container>
    </Modal>
  );
}

export default ImageModal;

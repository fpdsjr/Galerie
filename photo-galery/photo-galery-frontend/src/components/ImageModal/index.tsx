/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FcCheckmark } from 'react-icons/fc';
import { FiDownload } from 'react-icons/fi';
import { IoIosShareAlt } from 'react-icons/io';
import Modal from 'react-modal';
import { useCopyToClipboard } from 'react-use';

import { useImage } from '../../context/ImageInfoProvider/useImage';
import { Api } from '../../services/api';
import { Container, ButtonsContainer, ModalImage } from './styles';

interface IImageModalProps {
  isImageModalOpen: boolean;
  handleCloseImageModal: () => void;
}

function ImageModal({
  isImageModalOpen,
  handleCloseImageModal,
}: IImageModalProps) {
  const [imageClick, setImageClick] = useState(false);
  const [state, copyToClipboard] = useCopyToClipboard();

  const { ImageInfo } = useImage();

  function handleImageClick() {
    setImageClick(!imageClick);
  }

  const handleDownload = () => {
    saveAs(ImageInfo!.url, 'image/*');
  };

  async function handleDelete() {
    await Api.post('/delete', { key: ImageInfo?.key });
    handleCloseImageModal();
  }

  useEffect(() => {
    copyToClipboard('');
  }, [handleCloseImageModal]);

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
          <button type="button" onClick={handleDelete}>
            <AiFillDelete size={20} />
            Delete
          </button>
          <div>
            <button
              type="button"
              onClick={() => copyToClipboard(ImageInfo!.short_url)}>
              {state.value ? (
                <FcCheckmark size={20} />
              ) : (
                <IoIosShareAlt size={20} />
              )}
              {state.value ? 'Copied' : 'Share'}
            </button>

            <button type="button" onClick={handleDownload}>
              <FiDownload size={20} />
              Download
            </button>
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

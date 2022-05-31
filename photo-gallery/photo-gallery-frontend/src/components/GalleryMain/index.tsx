import { useState } from 'react';

import { useImage } from '../../context/ImageInfoProvider/useImage';
import useCloseMenuDropDown from '../../hooks/useCloseMenuDropDown';
import { useGalleryImages } from '../../hooks/useGalleryImages';
import useHandleModal from '../../hooks/useHandleModal';
import FirstSteps from '../FirstSteps';
import Gallery from '../Gallery';
import HeaderGallery from '../HeaderGallery';
import UploadModal from '../UploadModal';
import UserDropDown from '../UserDropDown';
import { Container } from './styles';

function GalleryMain() {
  const [modalUser, setModalUser] = useState(false);

  const { menuRef, userElement } = useCloseMenuDropDown({ setModalUser });
  const {
    isModalOpen: isUploadModalOpen,
    handleOpenModal: handleOpenUploadModal,
    handleCloseModal: handleCloseUploadModal,
  } = useHandleModal();

  const { deletedId } = useImage();
  const { galleryImages, isFetching } = useGalleryImages(
    deletedId,
    isUploadModalOpen,
  );

  function toggleModalUser() {
    setModalUser(!modalUser);
  }

  return (
    <Container>
      <HeaderGallery
        handleOpenUploadModal={handleOpenUploadModal}
        toggleModalUser={toggleModalUser}
        userElement={userElement}
      />
      <UploadModal
        isUploadModalOpen={isUploadModalOpen}
        handleCloseUploadModal={handleCloseUploadModal}
      />

      <UserDropDown modalUser={modalUser} menuRef={menuRef} />

      {!isFetching &&
        (galleryImages?.length ? (
          <Gallery galleryImages={galleryImages} />
        ) : (
          <FirstSteps />
        ))}
    </Container>
  );
}

export default GalleryMain;

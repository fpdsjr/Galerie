/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';

import useCloseMenuDropDown from '../../hooks/useCloseMenuDropDown';
import useFetch from '../../hooks/useFetch';
import useHandleModal from '../../hooks/useHandleModal';
import FirstSteps from '../FirstSteps';
import Gallery from '../Gallery';
import HeaderGallery from '../HeaderGallery';
import UploadModal from '../UploadModal';
import UserDropDown from '../UserDropDown';
import { Container } from './styles';

interface IListImagesRequest {
  id: number;
  url: string;
  name: string;
  short_url: string;
  key: string;
}

function GalleryMain() {
  const [modalUser, setModalUser] = useState(false);

  const { menuRef, userElement } = useCloseMenuDropDown({ setModalUser });
  const { isModalOpen, handleOpenModal, handleCloseModal } = useHandleModal();
  const { axiosResponse: galleryImages } = useFetch<IListImagesRequest[]>(
    'get',
    '/list/images',
  );

  function toggleModalUser() {
    setModalUser(!modalUser);
  }

  useEffect(() => {
    console.log('test');
  }, [isModalOpen]);

  return (
    <Container>
      <HeaderGallery
        handleOpenUploadModal={handleOpenModal}
        toggleModalUser={toggleModalUser}
        userElement={userElement}
      />
      <UploadModal
        isUploadModalOpen={isModalOpen}
        handleCloseUploadModal={handleCloseModal}
      />

      <UserDropDown modalUser={modalUser} menuRef={menuRef} />
      {galleryImages?.length ? (
        <Gallery galleryImages={galleryImages} />
      ) : (
        <FirstSteps />
      )}
    </Container>
  );
}

export default GalleryMain;

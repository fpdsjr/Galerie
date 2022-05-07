/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import useCloseMenuDropDown from '../../hooks/useCloseMenuDropDown';
import useHandleModal from '../../hooks/useHandleModal';
import Gallery from '../Gallery';
import Header from '../Header';
import UploadModal from '../UploadModal';
import UserDropDown from '../UserDropDown';
import { Container, Footer } from './styles';

function Home() {
  const [modalUser, setModalUser] = useState(false);

  const { menuRef, userElement } = useCloseMenuDropDown({ setModalUser });
  const { isModalOpen, handleOpenModal, handleCloseModal } = useHandleModal();

  function toggleModalUser() {
    setModalUser(!modalUser);
  }

  return (
    <Container>
      <Header
        handleOpenUploadModal={handleOpenModal}
        toggleModalUser={toggleModalUser}
        userElement={userElement}
      />
      <UploadModal
        isUploadModalOpen={isModalOpen}
        handleCloseUploadModal={handleCloseModal}
      />

      <UserDropDown modalUser={modalUser} menuRef={menuRef} />
      <Gallery />
      <Footer />
    </Container>
  );
}

export default Home;

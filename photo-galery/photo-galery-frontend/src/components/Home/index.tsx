/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import useCloseMenuDropDown from '../../hooks/useCloseMenuDropDown';
import Gallery from '../Gallery';
import Header from '../Header';
import UploadModal from '../UploadModal';
import UserDropDown from '../UserDropDown';
import { Container, Footer } from './styles';

function Home() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [modalUser, setModalUser] = useState(false);

  const { menuRef, userElement } = useCloseMenuDropDown({ setModalUser });

  function handleOpenUploadModal() {
    setIsUploadModalOpen(true);
  }

  function handleCloseUploadModal() {
    setIsUploadModalOpen(false);
  }

  function toogleModalUser() {
    setModalUser(!modalUser);
  }

  return (
    <Container>
      <Header
        handleOpenUploadModal={handleOpenUploadModal}
        toogleModalUser={toogleModalUser}
        userElement={userElement}
      />
      <UploadModal
        isUploadModalOpen={isUploadModalOpen}
        handleCloseUploadModal={handleCloseUploadModal}
      />

      <UserDropDown modalUser={modalUser} menuRef={menuRef} />
      <Gallery />
      <Footer />
    </Container>
  );
}

export default Home;

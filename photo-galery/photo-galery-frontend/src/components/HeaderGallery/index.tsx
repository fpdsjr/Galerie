import React from 'react';

import { Container, MenuImageDropDown, UploadButton } from './styles';

interface IHeaderProps {
  handleOpenUploadModal: () => void;
  toggleModalUser: () => void;
  userElement: React.Ref<HTMLDivElement>;
}

function HeaderGallery({
  handleOpenUploadModal,
  toggleModalUser,
  userElement,
}: IHeaderProps) {
  return (
    <Container>
      <h1>Galerie</h1>
      <div>
        <UploadButton type="button" onClick={handleOpenUploadModal}>
          Upload
        </UploadButton>
        <MenuImageDropDown ref={userElement} onClick={toggleModalUser} />
      </div>
    </Container>
  );
}

export default HeaderGallery;

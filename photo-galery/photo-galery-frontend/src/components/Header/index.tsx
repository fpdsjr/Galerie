import React from 'react';

import usePath from '../../hooks/usePath';
import {
  Container,
  HeaderDefaultButton,
  MenuImageDropDown,
  UploadBotton,
} from './styles';

interface IHeaderProps {
  handleOpenUploadModal: () => void;
  toogleModalUser: () => void;
  userElement: React.Ref<HTMLDivElement>;
}

function Header({
  handleOpenUploadModal,
  toogleModalUser,
  userElement,
}: IHeaderProps) {
  const { isHome } = usePath();

  function uploadHeader() {
    return (
      <>
        <h1>Galerie</h1>
        <div>
          <UploadBotton type="button" onClick={handleOpenUploadModal}>
            Upload Photo
          </UploadBotton>
          <MenuImageDropDown ref={userElement} onClick={toogleModalUser} />
        </div>
      </>
    );
  }

  return (
    <Container>
      {isHome ? (
        uploadHeader()
      ) : (
        <>
          <h1>Galerie</h1>
          <div>
            <HeaderDefaultButton type="button">About</HeaderDefaultButton>
            <HeaderDefaultButton type="button">Contact</HeaderDefaultButton>
          </div>
        </>
      )}
    </Container>
  );
}

export default Header;

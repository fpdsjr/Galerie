import React from 'react';

import usePath from '../../hooks/usePath';
import {
  Container,
  HeaderDefaultButton,
  MenuImageDropDown,
  UploadButton,
} from './styles';

interface IHeaderProps {
  handleOpenUploadModal: () => void;
  toggleModalUser: () => void;
  userElement: React.Ref<HTMLDivElement>;
}

function Header({
  handleOpenUploadModal,
  toggleModalUser,
  userElement,
}: IHeaderProps) {
  const { isHome } = usePath();

  function mainHeader() {
    return (
      <>
        <h1>Galerie</h1>
        <div>
          <UploadButton type="button" onClick={handleOpenUploadModal}>
            Upload
          </UploadButton>
          <MenuImageDropDown ref={userElement} onClick={toggleModalUser} />
        </div>
      </>
    );
  }

  return (
    <Container>
      {isHome ? (
        mainHeader()
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

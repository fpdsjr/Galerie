import React from 'react';

import { Container, DropDownMenuContent, Square } from './styles';

interface IUserDropDown {
  modalUser: boolean;
  menuRef: React.Ref<HTMLDivElement>;
}

function UserDropDown({ modalUser, menuRef }: IUserDropDown) {
  return (
    <Container ref={menuRef}>
      {modalUser ? (
        <DropDownMenuContent>
          <h4>Olá Flavio Junior</h4>
          <button type="button">Logout</button>
          <Square />
        </DropDownMenuContent>
      ) : null}
    </Container>
  );
}

export default UserDropDown;

import React, { useEffect, useState } from 'react';

import { useAuth } from '../../context/AuthProvider/useAuth';
import useFetch from '../../hooks/useFetch';
import { Container, DropDownMenuContent, Square } from './styles';

interface IUserDropDown {
  modalUser: boolean;
  menuRef: React.Ref<HTMLDivElement>;
}

interface IUserInfo {
  firstName: string;
  lastName: string;
}

function UserDropDown({ modalUser, menuRef }: IUserDropDown) {
  const auth = useAuth();

  const { axiosResponse: userInfo } = useFetch<IUserInfo>('get', '/user/info');

  return (
    <Container ref={menuRef}>
      {modalUser ? (
        <DropDownMenuContent>
          <h4>Olá {`${userInfo?.firstName} ${userInfo?.lastName}`}</h4>
          <button type="button" onClick={auth.logout}>
            Logout
          </button>
          <Square />
        </DropDownMenuContent>
      ) : null}
    </Container>
  );
}

export default UserDropDown;

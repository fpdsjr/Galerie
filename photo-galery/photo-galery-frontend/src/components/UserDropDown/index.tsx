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
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
  const auth = useAuth();

  async function fetchUserInfo() {
    const { axiosResponse } = useFetch(1, '/user/info');

    setUserInfo(axiosResponse?.data);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const { firstName, lastName } = userInfo;

  return (
    <Container ref={menuRef}>
      {modalUser ? (
        <DropDownMenuContent>
          <h4>Olá {`${firstName} ${lastName}`}</h4>
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

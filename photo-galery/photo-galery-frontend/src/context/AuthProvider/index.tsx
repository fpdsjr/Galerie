/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';

import {
  CreateUser,
  getUserLocalStorage,
  LoginRequest,
  setUserLocalStorage,
} from './utils';

interface IUser {
  email?: string;
  token?: string;
}

interface ICreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  createUser: (create: ICreateUser) => void;
  logout: () => void;
}

interface IAuthProvider {
  children: JSX.Element;
}

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const use = getUserLocalStorage();

    if (use) {
      setUser(use);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);
    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
    return response;
  }

  async function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  async function createUser({
    firstName,
    lastName,
    email,
    password,
  }: ICreateUser) {
    const response = await CreateUser(firstName, lastName, email, password);
    if (response) {
      await authenticate(email, password);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ...user,
        authenticate,
        createUser,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

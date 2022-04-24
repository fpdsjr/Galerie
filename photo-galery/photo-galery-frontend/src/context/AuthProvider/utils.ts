import { Api } from '../../services/api';

interface IUser {
  email?: string;
  token?: string;
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('u');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post('/user/authenticate', {
      email,
      password,
    });

    return request.data;
  } catch (err) {
    console.log(err);
  }
}

export async function CreateUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) {
  try {
    const request = await Api.post('/user/create', {
      firstName,
      lastName,
      email,
      password,
    });

    return request.data;
  } catch (err) {
    console.log(err);
  }
}

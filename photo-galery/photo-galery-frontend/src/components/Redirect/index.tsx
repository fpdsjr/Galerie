import React from 'react';

import { useAuth } from '../../context/AuthProvider/useAuth';
import Login from '../Login';

export function Redirect({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null {
  const auth = useAuth();

  if (!auth.token) {
    return <Login />;
  }

  return children;
}

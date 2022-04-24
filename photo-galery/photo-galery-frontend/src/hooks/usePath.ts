import { useLocation } from 'react-router-dom';

export default function usePath() {
  let isHome = false;

  const location = useLocation();
  const { pathname } = location;

  if (pathname === '/home') {
    isHome = true;
  }
  return {
    isHome,
  };
}

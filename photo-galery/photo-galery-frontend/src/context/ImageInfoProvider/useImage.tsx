import { useContext } from 'react';

import { ImageInfoContext } from '.';

export const useImage = () => {
  const context = useContext(ImageInfoContext);

  return context;
};

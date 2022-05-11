/* eslint-disable react/jsx-no-constructed-context-values */
import { conforms } from 'lodash';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import useFetch from '../../hooks/useFetch';

interface IImageInfo {
  id: number;
  short_url: string;
  name: string;
  key: string;
  url: string;
}

interface IAuthProvider {
  children: JSX.Element;
}

interface IContext {
  setImageInfo: Dispatch<SetStateAction<IImageInfo | undefined>>;
  ImageInfo: IImageInfo | undefined;
  setDeletedId: (args: number | undefined) => void;
  deletedId: number | undefined;
}

export const ImageInfoContext = createContext<IContext>({} as IContext);

export function ImageInfoProvider({ children }: IAuthProvider) {
  const [ImageInfo, setImageInfo] = useState<IImageInfo>();

  const [deletedId, setDeletedId] = useState<number | undefined>(0);

  return (
    <ImageInfoContext.Provider
      value={{
        ImageInfo,
        setImageInfo,
        setDeletedId,
        deletedId,
      }}>
      {children}
    </ImageInfoContext.Provider>
  );
}

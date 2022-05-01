/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IImageInfo {
  src: string;
}

interface IAuthProvider {
  children: JSX.Element;
}

interface IContext {
  setImageInfo: Dispatch<SetStateAction<IImageInfo | undefined>>;
  ImageInfo: IImageInfo | undefined;
}

export const ImageInfoContext = createContext<IContext>({} as IContext);

export function ImageInfoProvider({ children }: IAuthProvider) {
  const [ImageInfo, setImageInfo] = useState<IImageInfo>();

  return (
    <ImageInfoContext.Provider value={{ ImageInfo, setImageInfo }}>
      {children}
    </ImageInfoContext.Provider>
  );
}

import { useEffect, useState } from 'react';

import { Api } from '../services/api';

interface IListImagesRequest {
  id: number;
  url: string;
  name: string;
  short_url: string;
  key: string;
}

export function useGalleryImages(
  deletedId: number | undefined,
  isModalOpen: boolean,
) {
  const [galleryImages, setGalleryImages] = useState<IListImagesRequest[]>([]);

  async function handleFetch() {
    const response = await Api.get('/list/images');

    setGalleryImages(response.data);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    handleFetch();
  }, [isModalOpen]);

  useEffect(() => {
    console.log(deletedId);
    const deleteImage = galleryImages?.filter(
      (image: IListImagesRequest) => image.id !== deletedId,
    );
    setGalleryImages(deleteImage);
  }, [deletedId]);

  return {
    galleryImages,
  };
}

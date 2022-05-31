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
  const [galleryLength, setGalleryLength] = useState(0);
  const [isFetching, setIsFetching] = useState(true);

  async function handleFetch() {
    const response = await Api.get('/list/images');

    setGalleryImages(response.data);
    setGalleryLength(response.data.length);
  }

  useEffect(() => {
    async function loadingData() {
      await handleFetch();
      setIsFetching(false);
    }
    loadingData();
  }, [isModalOpen]);

  useEffect(() => {
    const deleteImage = galleryImages?.filter(
      (image: IListImagesRequest) => image.id !== deletedId,
    );
    setGalleryImages(deleteImage);
  }, [deletedId]);

  return {
    galleryImages,
    isFetching,
    galleryLength,
  };
}

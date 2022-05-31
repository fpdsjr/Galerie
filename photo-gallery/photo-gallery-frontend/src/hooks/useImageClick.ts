import { useEffect, useState } from 'react';

export default function useImageClick(isImageModalOpen: boolean) {
  const [imageClick, setImageClick] = useState(false);

  function handleImageClick() {
    setImageClick(!imageClick);
  }

  useEffect(() => {
    setImageClick(false);
  }, [isImageModalOpen]);

  return {
    imageClick,
    handleImageClick,
  };
}

import { useState } from 'react';

export default function useHandleModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleOpenClose() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    handleOpenClose,
    handleCloseModal,
  };
}

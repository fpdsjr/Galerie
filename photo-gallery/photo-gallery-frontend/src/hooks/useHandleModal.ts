import { useState } from 'react';

export default function useHandleModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
}

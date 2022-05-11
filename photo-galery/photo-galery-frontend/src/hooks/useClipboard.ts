import { useEffect } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

interface IHandleCloseImageModal {
  handleCloseImageModal: () => void;
}

export function useClipboard({
  handleCloseImageModal,
}: IHandleCloseImageModal) {
  const [isCopied, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    copyToClipboard('');
  }, [handleCloseImageModal]);

  return {
    isCopied,
    copyToClipboard,
  };
}

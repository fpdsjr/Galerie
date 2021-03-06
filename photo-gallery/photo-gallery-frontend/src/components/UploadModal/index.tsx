import Modal from 'react-modal';

import Upload from '../Upload';

interface IUploadModal {
  isUploadModalOpen: boolean;
  handleCloseUploadModal: () => void;
}

function UploadModal({
  isUploadModalOpen,
  handleCloseUploadModal,
}: IUploadModal) {
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-upload-modal"
      isOpen={isUploadModalOpen}
      onRequestClose={() => handleCloseUploadModal()}>
      <Upload handleCloseUploadModal={handleCloseUploadModal} />
    </Modal>
  );
}

export default UploadModal;

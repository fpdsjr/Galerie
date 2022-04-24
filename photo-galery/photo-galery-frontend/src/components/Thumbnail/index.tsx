import { motion } from 'framer-motion';

import { Image, ImageContainer } from './styles';

interface IThumbnailProps {
  handleOpenUploadModal: () => void;
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { ...transition, duration: 1.5 },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

function Thumbnail({ id, i, handleOpenUploadModal }: IThumbnailProps) {
  return (
    <motion.div variants={thumbnailVariants}>
      <ImageContainer
        whileHover="hover"
        variants={frameVariants}
        transition={transition}>
        <Image
          onClick={() => handleOpenUploadModal()}
          src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
          alt="The Barbican"
          variants={imageVariants}
          transition={transition}
        />
      </ImageContainer>
    </motion.div>
  );
}

export default Thumbnail;

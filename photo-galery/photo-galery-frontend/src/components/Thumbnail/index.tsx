import { motion } from 'framer-motion';

import { useImage } from '../../context/ImageInfoProvider/useImage';
import { Image, ImageContainer } from './styles';

interface IThumbnailProps {
  handleOpenUploadModal: () => void;
  src: string;
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

function Thumbnail({ handleOpenUploadModal, src }: IThumbnailProps) {
  const ImageInfo = useImage();
  const { setImageInfo } = ImageInfo;

  return (
    <motion.div variants={thumbnailVariants}>
      <ImageContainer
        whileHover="hover"
        variants={frameVariants}
        transition={transition}>
        <Image
          onClick={() => {
            handleOpenUploadModal();
            setImageInfo({ src });
          }}
          src={src}
          alt="The Barbican"
          variants={imageVariants}
          transition={transition}
        />
      </ImageContainer>
    </motion.div>
  );
}

export default Thumbnail;

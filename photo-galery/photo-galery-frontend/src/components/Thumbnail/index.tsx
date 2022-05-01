import { motion } from 'framer-motion';

import { useImage } from '../../context/ImageInfoProvider/useImage';
import {
  Image,
  ImageContainer,
  transition,
  thumbnailVariants,
  frameVariants,
  imageVariants,
} from './styles';

interface IThumbnailProps {
  handleOpenImageModal: () => void;
  src: string;
}

function Thumbnail({ handleOpenImageModal, src }: IThumbnailProps) {
  const { setImageInfo } = useImage();

  return (
    <motion.div variants={thumbnailVariants}>
      <ImageContainer
        whileHover="hover"
        variants={frameVariants}
        transition={transition}>
        <Image
          onClick={() => {
            handleOpenImageModal();
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

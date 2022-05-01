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
  handleOpenUploadModal: () => void;
  src: string;
}

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

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

interface IImageInfos {
  id: number;
  short_url: string;
  name: string;
  key: string;
  url: string;
}

interface IThumbnailProps {
  handleOpenImageModal: () => void;
  imageInfos: IImageInfos;
}

function Thumbnail({ handleOpenImageModal, imageInfos }: IThumbnailProps) {
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
            setImageInfo(imageInfos);
          }}
          src={imageInfos.url}
          alt={imageInfos.name}
          variants={imageVariants}
          transition={transition}
        />
      </ImageContainer>
    </motion.div>
  );
}

export default Thumbnail;

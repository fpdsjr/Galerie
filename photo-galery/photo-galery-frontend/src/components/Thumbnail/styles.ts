import { motion } from 'framer-motion';
import styled from 'styled-components';

export const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { ...transition, duration: 1.5 },
  },
};

export const frameVariants = {
  hover: { scale: 0.95 },
};

export const imageVariants = {
  hover: { scale: 1.1 },
};

export const Image = styled(motion.img)`
  width: 100%;
  z-index: -1;
`;

export const ImageContainer = styled(motion.div)`
  max-width: 500px;
  overflow: hidden;
  margin: 0;
  margin-bottom: 10px;
  display: flex;
  break-inside: avoid;
  z-index: -2;
`;

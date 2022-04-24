import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const ImageContainer = styled(motion.div)`
  max-width: 500px;
  height: 600px;
  overflow: hidden;
  z-index: -2;
`;

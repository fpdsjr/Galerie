import { motion } from 'framer-motion';
import styled from 'styled-components';

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

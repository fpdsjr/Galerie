import styled from 'styled-components';

import blobMainGallery from '../../assets/main-gallery-blob.svg';

export const Container = styled.div`
  display: flex;
  max-width: 1700px;
  width: 100%;
  height: 85vh;
  background-image: url(${blobMainGallery});
  background-repeat: no-repeat;
  background-size: 950px;
  background-position-x: -180px;
  background-position-y: -50px;

  img {
    width: 60%;
  }
`;

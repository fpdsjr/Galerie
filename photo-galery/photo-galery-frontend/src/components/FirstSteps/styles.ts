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

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column-reverse;
    background-size: 680px;
    background-position-x: -150px;
    background-position-y: 200px;

    img {
      width: 400px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    margin-top: 120px;
    flex-direction: column-reverse;
    background-size: 550px;
    background-position-x: -100px;
    background-position-y: 100px;

    img {
      width: 380px;
    }
  }
`;

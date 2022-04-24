import styled from 'styled-components';

interface IModelImage {
  imageClick: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  justify-content: flex-end;
  position: sticky;
  button {
    width: 8rem;
    height: 2.5rem;
  }
`;

export const ShareButton = styled.button`
  display: flex;
  width: 8rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const maxSizes = {
  defaultImageWidth: '1300px',
  defaultImageHeight: '720px',
  zoomImageWidth: '1680px',
  zoomImageHeight: '900px',
};

export const ModalImage = styled.img<IModelImage>`
  margin: 0 auto;
  max-width: ${({ imageClick }) =>
    imageClick ? maxSizes.zoomImageWidth : maxSizes.defaultImageWidth};
  max-height: ${({ imageClick }) =>
    imageClick ? maxSizes.zoomImageHeight : maxSizes.defaultImageHeight};
  width: 100%;
  height: 100vh;

  &:hover {
    cursor: ${({ imageClick }) => (imageClick ? 'zoom-out' : 'zoom-in')};
  }
`;

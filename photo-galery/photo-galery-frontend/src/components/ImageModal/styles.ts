import styled from 'styled-components';

interface IModelImage {
  imageClick: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  gap: 1rem;
  width: 90%;
  justify-content: space-between;

  div {
    display: flex;
    gap: 2rem;
  }

  button {
    width: 8rem;
    height: 2.5rem;
  }

  @media (max-width: 450px) {
    div {
      gap: 1rem;
    }

    button {
      width: 7rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 360px) {
    div {
      gap: 1rem;
    }

    button {
      width: 6rem;
      font-size: 0.8rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: 8rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const maxSizes = {
  defaultImageWidth: '800px',
  defaultImageHeight: '700px',
  zoomImageWidth: '100%',
  zoomImageHeight: '100%',
};

export const ModalImage = styled.img<IModelImage>`
  margin: 0 auto;
  object-fit: contain;

  max-width: ${({ imageClick }) =>
    imageClick ? maxSizes.zoomImageWidth : maxSizes.defaultImageWidth};
  max-height: ${({ imageClick }) =>
    imageClick ? maxSizes.zoomImageHeight : maxSizes.defaultImageHeight};
  width: auto;
  height: auto;

  &:hover {
    cursor: ${({ imageClick }) => (imageClick ? 'zoom-out' : 'zoom-in')};
  }

  @media (max-width: 1000px) {
    max-width: ${({ imageClick }) => (imageClick ? '100%' : '90%')};
    max-height: ${({ imageClick }) => (imageClick ? '100%' : '90%')};
  }
`;

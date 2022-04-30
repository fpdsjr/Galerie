import styled from 'styled-components';

interface IProps {
  fileLength: number;
}

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  padding: 1rem;
`;

const dropZoneSizes = {
  withoutImageWidth: '100%',
  withoutImageHeight: '780px',
  withImageWidth: '300px',
  withImageHeight: '500px',
};

const {
  withImageWidth,
  withoutImageWidth,
  withImageHeight,
  withoutImageHeight,
} = dropZoneSizes;

export const DropzoneContainer = styled.div<IProps>`
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: ${({ fileLength }) =>
    fileLength > 0 ? withImageWidth : withoutImageWidth};
  height: ${({ fileLength }) =>
    fileLength > 0 ? withImageHeight : withoutImageHeight};
  border: 2px dashed #d7d7d7;
  border-radius: 0.25rem;

  img {
    object-position: ${({ fileLength }) => (fileLength > 0 ? '-10px' : '')};
    width: ${({ fileLength }) => (fileLength > 0 ? '280px' : '1200px')};
    height: ${({ fileLength }) => (fileLength > 0 ? '100%' : '600px')};
  }
`;

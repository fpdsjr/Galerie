/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import LoaderSvg from '../../assets/loader.svg';
import { Api } from '../../services/api';
import { Container, PreviewContainer, PreviewImage, Loader } from './styles';

interface IPreviewUploadList {
  file: File;
  id: string;
  name: string;
  preview: string;
  uploaded: boolean;
}

interface IProps {
  filesTobeUploaded: IPreviewUploadList[];
  deleteImage: (id: string) => void;
}

interface IFile {
  file: File;
  id: string;
  name: string;
  preview: string;
  uploaded: boolean;
}

function UploadedList({ filesTobeUploaded, deleteImage }: IProps) {
  const [uploadedResult, setUploadedResult] = useState<IFile[]>([]);

  async function processUpload(image: IFile) {
    const data = new FormData();

    data.append('file', image.file, image.name);

    await Api.post('/upload', data);

    image.uploaded = true;

    setUploadedResult([...uploadedResult, image]);
  }

  useEffect(() => {
    filesTobeUploaded.forEach((file) => {
      processUpload(file);
    });
  }, [filesTobeUploaded]);

  return (
    <Container fileLength={filesTobeUploaded.length}>
      {filesTobeUploaded.map(({ name, preview, id, uploaded }) => (
        <PreviewContainer key={id}>
          <PreviewImage src={preview} alt={name} />
          <button type="button" onClick={() => deleteImage(id)}>
            <MdOutlineCancel size={40} title="Remove" />
          </button>
          {!uploaded ? <Loader src={LoaderSvg} alt="loader" /> : ''}
        </PreviewContainer>
      ))}
    </Container>
  );
}

export default UploadedList;

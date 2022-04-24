/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';

import { Api } from '../../services/api';
import { Container } from './styles';

interface IPreviewUploadList {
  file: File;
  id: string;
  name: string;
  preview: string;
  uploaded: boolean;
}

interface IProps {
  filesTobeUploaded: IPreviewUploadList[];
}

interface IFile {
  file: File;
  id: string;
  name: string;
  preview: string;
  uploaded: boolean;
}

function UploadedList({ filesTobeUploaded }: IProps) {
  const [uploadedResult, setUploadedResult] = useState<IFile[]>([]);

  async function processUpload(image: IFile) {
    const data = new FormData();

    data.append('file', image.file, image.name);

    // await Api.post('/upload', data);

    image.uploaded = true;

    setUploadedResult([...uploadedResult, image]);
  }

  useEffect(() => {
    filesTobeUploaded.forEach((file) => {
      processUpload(file);
    });
  }, [filesTobeUploaded]);

  return (
    <Container>
      {filesTobeUploaded.map(({ name, preview, id, uploaded }) => (
        <div key={id}>
          <p>{name}</p>
          <img src={preview} alt={name} />
          {uploaded ? 'verdade' : 'falso'}
        </div>
      ))}
    </Container>
  );
}

export default UploadedList;

/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line react/jsx-props-no-spreading
import { uniqueId } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import UploadedList from '../UploadedList';
import { Container } from './styles';

interface IPreviewUploadList {
  file: File;
  id: string;
  name: string;
  preview: string;
  uploaded: boolean;
}

function Upload() {
  const [uploadFiles, setUploadedFiles] = useState<File[]>([]);
  const [filesTobeUploaded, setFilesTobeUploaded] = useState<
    IPreviewUploadList[]
  >([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setUploadedFiles([...acceptedFiles]);
    },
    [uploadFiles],
  );

  function handleUpload() {
    const upload = uploadFiles.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      preview: URL.createObjectURL(file),
      uploaded: false,
    }));

    setFilesTobeUploaded([...filesTobeUploaded, ...upload]);
  }

  useEffect(() => {
    handleUpload();
  }, [uploadFiles]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: 'image/*',
    });

  return (
    <>
      <Container
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragReject={isDragReject}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag drop some files here, or click to select files</p>
        )}
      </Container>
      <UploadedList filesTobeUploaded={filesTobeUploaded} />
    </>
  );
}

export default Upload;

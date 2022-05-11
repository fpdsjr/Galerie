/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import { uniqueId } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import uploadSvg from '../../assets/upload-animation.svg';
import { useImage } from '../../context/ImageInfoProvider/useImage';
import UploadedList from '../UploadedList';
import {
  Container,
  DropzoneContainer,
  DoneButton,
  LeftElementContainer,
} from './styles';

interface IPreviewUploadList {
  file: File;
  id: string;
  name: string;
  preview: string;
  uploaded: boolean;
}

interface IUploadProps {
  handleCloseUploadModal: () => void;
}

function Upload({ handleCloseUploadModal }: IUploadProps) {
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/jpeg,image/png',
  });

  function deleteImage(id: string) {
    const deletedImage = filesTobeUploaded.filter((image) => image.id !== id);

    setFilesTobeUploaded(deletedImage);
  }

  return (
    <Container fileLength={filesTobeUploaded.length}>
      <UploadedList
        filesTobeUploaded={filesTobeUploaded}
        deleteImage={deleteImage}
      />
      <LeftElementContainer fileLength={filesTobeUploaded.length}>
        <DropzoneContainer
          {...getRootProps()}
          fileLength={filesTobeUploaded.length}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the images here ...</p>
          ) : (
            <p>Drag drop some images here, or click to select</p>
          )}
          <img src={uploadSvg} alt="upload" />
        </DropzoneContainer>
        <DoneButton
          type="button"
          onClick={() => {
            handleCloseUploadModal();
          }}
          fileLength={filesTobeUploaded.length}>
          Done
        </DoneButton>
      </LeftElementContainer>
    </Container>
  );
}

export default Upload;

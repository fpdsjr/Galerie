import { randomBytes } from 'crypto';

const acceptFile: string[] = ['image/png', 'image/jpg', 'image/jpeg'];

export const editFileName = (req, file, callback) => {
  const fileHash = randomBytes(16).toString('hex');
  const fileName = `${fileHash}-${file.originalname}`;

  return callback(null, fileName);
};

export const imageFileFilter = (req, file, callback) => {
  if (acceptFile.includes(file.mimetype)) {
    return callback(null, true);
  }

  return callback(
    new Error('You can only upload png, jpg or jpeg images'),
    false,
  );
};

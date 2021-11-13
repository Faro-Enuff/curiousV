import { Dispatch, SetStateAction } from 'react';

export const handleUpload = (
  files: File[],
  input: any,
  setInput: Dispatch<SetStateAction<any>>
) => {
  const file: File = files[0];
  console.log(file);
  setInput({
    ...input,
    file: file,
  });
};

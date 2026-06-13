import fs from 'fs';

export default (path1, path2) => {
  const makeJsonObj = (filePath) =>
    JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const file1 = makeJsonObj(path1);
  const file2 = makeJsonObj(path2);

  console.log('file1:', file1);
  console.log('file2:', file2);
};

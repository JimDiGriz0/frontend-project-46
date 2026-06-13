import fs from 'node:fs';
//TODO удалить es-toolkit

const gendiff = (path1, path2) => {
  const makeJsonObj = (filePath) =>
    JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const getCommonArrUniqKeysSorted = (keysArr1, keysArr2) => {
    const set = new Set(keysArr1.concat(keysArr2));
    return [...set].toSorted((a, b) => a.localeCompare(b));
  };

  const file1 = makeJsonObj(path1);
  const file2 = makeJsonObj(path2);

  const file1KeysArr = Object.keys(file1);
  const file2KeysArr = Object.keys(file2);

  const allKeys = getCommonArrUniqKeysSorted(file1KeysArr, file2KeysArr);

  const result = allKeys.reduce((acc, key) => {
    if (!Object.hasOwn(file2, key)) {
      return acc + ` - ${key}: ${file1[key]}\n`;
    }

    if (!Object.hasOwn(file1, key)) {
      return acc + ` + ${key}: ${file2[key]}\n`;
    }

    if (file1[key] === file2[key]) {
      return acc + `   ${key}: ${file1[key]}\n`;
    } else {
      return acc + ` - ${key}: ${file1[key]}\n + ${key}: ${file2[key]}\n`;
    }
  }, '');
  return `{\n${result}}`;
};

export default gendiff;

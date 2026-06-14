import fs from 'node:fs'
import path from 'node:path'
import getFileData from './parsers.js'
// TODO удалить es-toolkit

const gendiff = (path1, path2) => {
  const getCommonArrUniqKeysSorted = (keysArr1, keysArr2) => {
    const set = new Set(keysArr1.concat(keysArr2))
    return [...set].toSorted((a, b) => a.localeCompare(b))
  }

  const file1 = fs.readFileSync(path1, 'utf-8')
  const file1Ext = path.extname(path1)

  const file2 = fs.readFileSync(path2, 'utf-8')
  const file2Ext = path.extname(path2)

  const file1Data = getFileData(file1, file1Ext)
  const file2Data = getFileData(file2, file2Ext)

  const file1KeysArr = Object.keys(file1Data)

  const file2KeysArr = Object.keys(file2Data)

  const allKeys = getCommonArrUniqKeysSorted(file1KeysArr, file2KeysArr)

  const result = allKeys.reduce((acc, key) => {
    if (!Object.hasOwn(file2Data, key)) {
      return acc + ` - ${key}: ${file1Data[key]}\n`
    }

    if (!Object.hasOwn(file1Data, key)) {
      return acc + ` + ${key}: ${file2Data[key]}\n`
    }

    if (file1Data[key] === file2Data[key]) {
      return acc + `   ${key}: ${file1Data[key]}\n`
    } else {
      return (
        acc + ` - ${key}: ${file1Data[key]}\n + ${key}: ${file2Data[key]}\n`
      )
    }
  }, '')
  return `{\n${result}}`
}

// const x = gendiff(
//   '/home/digriz/projects/hexlet-projects/frontend-project-46/__fixtures__/file1.json',
//   '/home/digriz/projects/hexlet-projects/frontend-project-46/__fixtures__/file2.json',
// )
// console.log(x)

export default gendiff

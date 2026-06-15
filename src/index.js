import fs from 'node:fs'
import path from 'node:path'
import getFileData from './parsers.js'
import buildTree from './buildTree.js'
import getFormat from './formatters/index.js'

const gendiff = (path1, path2, formatName) => {
  const file1 = fs.readFileSync(path1, 'utf-8')
  const file1Ext = path.extname(path1)

  const file2 = fs.readFileSync(path2, 'utf-8')
  const file2Ext = path.extname(path2)

  const file1Data = getFileData(file1, file1Ext)
  const file2Data = getFileData(file2, file2Ext)

  const tree = buildTree(file1Data, file2Data)

  return getFormat(tree, formatName)
}

export default gendiff

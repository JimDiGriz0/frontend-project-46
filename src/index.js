import fs from 'node:fs'
import path from 'node:path'
import getFileData from './parsers.js'
import stylish from './stylish.js'
import buildTree from './buildTree.js'

const gendiff = (path1, path2, format) => {
  const file1 = fs.readFileSync(path1, 'utf-8')
  const file1Ext = path.extname(path1)

  const file2 = fs.readFileSync(path2, 'utf-8')
  const file2Ext = path.extname(path2)

  const file1Data = getFileData(file1, file1Ext)
  const file2Data = getFileData(file2, file2Ext)

  const tree = buildTree(file1Data, file2Data)

  switch (format) {
    default:
      return stylish(tree)
  }
}

export default gendiff

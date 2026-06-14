import gendiff from '../src/index.js'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const formats = ['json', 'yml', 'yaml']

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename)

let expected

beforeAll(() => {
  expected = fs.readFileSync(getFixturePath('result.txt'), 'utf-8')
})

test.each(formats)('current format %s', (format) => {
  const file1 = getFixturePath(`file1.${format}`)
  const file2 = getFixturePath(`file2.${format}`)
  const actual = gendiff(file1, file2)
  expect(actual).toEqual(expected.trim())
})

// test('gendiff test', () => {
//   const file1 = getFixturePath('file1.json')
//   const file2 = getFixturePath('file2.json')
//   const actual = gendiff(file1, file2)
//   expect(actual).toEqual(expected.trim())
// })

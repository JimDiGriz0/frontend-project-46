import gendiff from '../src/index.js'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import stylish from '../src/formatters/stylish.js'
import plain from '../src/formatters/plain.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const formats = ['json', 'yml', 'yaml']

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename)

let expected
let expected2

beforeAll(() => {
  expected = fs.readFileSync(getFixturePath('result1.txt'), 'utf-8')
  expected2 = fs.readFileSync(getFixturePath('result2.txt'), 'utf-8')
})

test.each(formats)('stylish: current format %s', (format) => {
  const file1 = getFixturePath(`file1.${format}`)
  const file2 = getFixturePath(`file2.${format}`)
  const actual = gendiff(file1, file2)
  expect(actual).toEqual(expected.trim())
})

test.each(formats)('plain: current format %s', (format) => {
  const file1 = getFixturePath(`file1.${format}`)
  const file2 = getFixturePath(`file2.${format}`)
  const actual = gendiff(file1, file2, 'plain')
  expect(actual).toEqual(expected2.trim())
})

test('Error cases', () => {
  const file1 = getFixturePath('file1')
  const file2 = getFixturePath('file2')
  const file3 = getFixturePath('file2.yaml')
  const undefinedFile1 = getFixturePath('undefinedFile1.json')

  expect(() => gendiff(file1, file2)).toThrow()
  expect(() => gendiff(file1, file3)).toThrow()
  expect(() => gendiff(undefinedFile1, file3)).toThrow()
})

test('stylish error case', () => {
  const brokenTree = [
    {
      key: 'invalidKey',
      type: 'unsupportedValue',
    },
  ]
  expect(() => stylish(brokenTree)).toThrow()
  expect(() => plain(brokenTree)).toThrow()
})

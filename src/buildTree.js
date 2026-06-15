import { isObject } from 'es-toolkit/compat'

const buildTree = (obj1, obj2) => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  const set = new Set(keys1.concat(keys2))
  const allKeys = [...set].toSorted((a, b) => a.localeCompare(b))

  return allKeys.map((key) => {
    if (
      isObject(obj1[key]) &&
      !Array.isArray(obj1[key]) &&
      isObject(obj2[key]) &&
      !Array.isArray(obj2[key])
    ) {
      return { key, type: 'nested', children: buildTree(obj1[key], obj2[key]) }
    }

    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      return { key, type: 'deleted', value: obj1[key] }
    } else if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      return { key, type: 'added', value: obj2[key] }
    } else if (obj1[key] === obj2[key]) {
      return { key, type: 'unchanged', value: obj1[key] }
    } else {
      return { key, type: 'changed', oldValue: obj1[key], newValue: obj2[key] }
    }
  })
}

export default buildTree

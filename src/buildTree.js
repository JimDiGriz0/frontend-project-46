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

const result = buildTree(
  {
    common: {
      setting1: 'Value 1',
      setting2: 200,
      setting3: true,
      setting6: {
        key: 'value',
        doge: {
          wow: '',
        },
      },
    },
    group1: {
      baz: 'bas',
      foo: 'bar',
      nest: {
        key: 'value',
      },
    },
    group2: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
  },
  {
    common: {
      follow: false,
      setting1: 'Value 1',
      setting3: null,
      setting4: 'blah blah',
      setting5: {
        key5: 'value5',
      },
      setting6: {
        key: 'value',
        ops: 'vops',
        doge: {
          wow: 'so much',
        },
      },
    },
    group1: {
      foo: 'bar',
      baz: 'bars',
      nest: 'str',
    },
    group3: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
  },
)

export default buildTree

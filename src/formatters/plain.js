import { isObject } from 'es-toolkit/compat'

const formatValue = (value) => {
  if (value === null) {
    return `null`
  }

  if (isObject(value)) {
    return `[complex value]`
  }

  if (typeof value === 'string') return `'${value}'`

  return String(value)
}

const plain = (tree, ancestry = '') => {
  const lines = tree.flatMap((obj) => {
    const propertyPath = ancestry === '' ? obj.key : `${ancestry}.${obj.key}`

    switch (obj.type) {
      case 'nested':
        return plain(obj.children, propertyPath)

      case 'deleted':
        return `Property '${propertyPath}' was removed`

      case 'unchanged':
        return []

      case 'changed':
        const oldValue = formatValue(obj.oldValue)
        const newValue = formatValue(obj.newValue)
        return `Property '${propertyPath}' was updated. From ${oldValue} to ${newValue}`

      case 'added':
        const value = formatValue(obj.value)
        return `Property '${propertyPath}' was added with value: ${value}`

      default:
        throw new Error('unsuported type')
    }
  })

  return lines.join('\n')
}

export default plain

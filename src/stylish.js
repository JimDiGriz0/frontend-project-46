import { isObject } from 'es-toolkit/compat'

const stringify = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value)
  }

  const currentIndent = ' '.repeat(depth * 4)
  const bracketIndent = ' '.repeat((depth - 1) * 4)
  const lines = Object.keys(value).map((key) => {
    return `${currentIndent}${key}: ${stringify(value[key], depth + 1)}`
  })

  return ['{', ...lines, `${bracketIndent}}`].join('\n')
}

const stylish = (tree, depth = 1) => {
  const currentIndent = ' '.repeat(depth * 4 - 2)
  const bracketIndent = ' '.repeat((depth - 1) * 4)

  const lines = tree.flatMap((node) => {
    switch (node.type) {
      case 'nested':
        return `${currentIndent}  ${node.key}: ${stylish(node.children, depth + 1)}`
      case 'added':
        return `${currentIndent}+ ${node.key}: ${stringify(node.value, depth + 1)}`
      case 'deleted':
        return `${currentIndent}- ${node.key}: ${stringify(node.value, depth + 1)}`
      case 'unchanged':
        return `${currentIndent}  ${node.key}: ${stringify(node.value, depth + 1)}`
      case 'changed':
        return [
          `${currentIndent}- ${node.key}: ${stringify(node.oldValue, depth + 1)}`,
          `${currentIndent}+ ${node.key}: ${stringify(node.newValue, depth + 1)}`,
        ]
      default:
        throw new Error(`Unknown type: ${node.type}`)
    }
  })

  return ['{', ...lines, `${bracketIndent}}`].join('\n')
}

export default stylish

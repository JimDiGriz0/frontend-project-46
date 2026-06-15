import stylish from './stylish.js'
import plain from './plain.js'

const getFormat = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(tree)
    default: {
      return stylish(tree)
    }
  }
}

export default getFormat

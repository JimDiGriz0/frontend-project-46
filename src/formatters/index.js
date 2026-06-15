import stylish from './stylish.js'
import plain from './plain.js'
import json from './json.js'

const getFormat = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(tree)
    case 'json':
      return json(tree)
    default: {
      return stylish(tree)
    }
  }
}

export default getFormat

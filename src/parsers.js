import yaml from 'js-yaml'

const parsers = (file, extension) => {
  let result

  switch (extension) {
    case '.json':
      result = JSON.parse(file)
      break
    case '.yml':
    case '.yaml':
      result = yaml.load(file)
      break
    default:
      throw new Error('unsuported file format')
  }

  return result
}

export default parsers

export const kebabToCamel = (kebabString) => {
  const words = kebabString.split('-')
  let camelString = words[0]

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    camelString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }

  return camelString
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const isFieldsEmpty = (obj) => {
  for (const [, field] of Object.entries(obj)) {
    for (const [, value] of Object.entries(field)) {
      if (value !== '') return false
    }
  }

  return true
}

export const isStringEmpty = (string) => {
  if (string !== '') {
    return false
  }

  return true
}

export const hideIfEmpty = (element) => {
  if (typeof element === 'string') {
    return isStringEmpty(element) ? 'hidden ' : ''
  } else if (typeof element === 'object') {
    return isFieldsEmpty(element) ? 'hidden ' : ''
  }
}

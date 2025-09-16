export const kebabToCamel = (kebabString) => {
  const words = kebabString.split('-')
  let camelString = words[0]

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    camelString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }

  return camelString
}

export function phoneToNumber(formatedCallNumber: string) {
  const cleanString = formatedCallNumber
    .replace('+', '')
    .replace('(', '')
    .replace(')', '')
    .replace(/ /g, '')
    .replace(/-/g, '')

  const pureNumber = Number(cleanString)

  return pureNumber
}

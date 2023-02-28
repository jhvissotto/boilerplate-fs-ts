//
// prettier-ignore
export function append(...[prefix = '', name, suffix = '', char = '/']: [string, string[], string?, string?]) {


  return [prefix, ...name, suffix]
    .filter(Boolean)
    .map(i => i.trim())
    .join(char)

}

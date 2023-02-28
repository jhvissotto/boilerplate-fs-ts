// prettier-ignore
export function log(input, consoleLog = false, space = 2) {
  
  const data = JSON.stringify(input, null, space)
  
  if (consoleLog) console.log('>> json.log:', data)
  
  return data
}

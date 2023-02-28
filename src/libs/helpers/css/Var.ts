// prettier-ignore
export function Var(X: number | string) {

  // ==================================== //
  // ============ exceptions ============ //
  // ==================================== //
  // undefined
  if (X == undefined || X == 'undefined')
  return ''
  
  
  // null
  if (X == null || X == 'null')
  return ''
  
  
  // NaN
  if (Number.isNaN(X) || X == 'NaN')
  return ''

  
  
  // ================================ //
  // ============ values ============ //
  // ================================ //
  // number
  if (typeof X == 'number') 
  return X


  // string
  if (typeof X == 'string') 
  return `var(--${X})`

}

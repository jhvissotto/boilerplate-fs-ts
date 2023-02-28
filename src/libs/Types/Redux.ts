// ===================================== //
// ============ Prop Action ============ //
// ===================================== //
export type Action<Type = string, Payload = any> = {
  type: Type
  payload?: Payload
}

export type ActPld</*Type = string,*/ Payload = any> = {
  // type: Type
  payload?: Payload
}

//
//
// =========================================== //
// ============ Function Dispatch ============ //
// =========================================== //
export type Dispatch<Type = string, Payload = any> = (action: {
  type: Type
  payload?: Payload
}) => void

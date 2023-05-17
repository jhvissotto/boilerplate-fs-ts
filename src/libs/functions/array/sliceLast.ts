export function sliceLast<Elem>(arr: Elem[]) {
  //
  const sliced = arr.slice(0, -1)

  const last = arr[arr.length - 1]

  return { sliced, last }
}

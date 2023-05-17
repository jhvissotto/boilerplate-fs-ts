export function sliceFirst<Elem>(arr: Elem[]) {
  //
  const [first, ...sliced] = arr

  return { first, sliced }
}

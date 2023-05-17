export function addLast<Elem>(arr: Elem[], item: Elem) {
  // ============================= //
  // ======== TYPE GUARDS ======== //
  // ============================= //
  if (!Array.isArray(arr)) {
    return arr
  }

  if (item === undefined) {
    return arr
  }

  // =========================== //
  // ======== OPERATION ======== //
  // =========================== //
  const newArr = [...arr, item]

  return newArr
}

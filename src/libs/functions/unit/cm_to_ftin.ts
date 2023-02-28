//
export function cm_to_ftin(cm: number) {
  //
  const Feets = (cm * 0.3937) / 12
  const feets = Math.floor(Feets)
  const inches = Math.round((Feets - feets) * 12)

  //
  const ftIn = `${feets}'${inches}"`

  return {
    ftIn,
    feets,
    inches,
  }
}

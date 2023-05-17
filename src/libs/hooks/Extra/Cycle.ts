import { useFirstMountState } from 'react-use'

export function Cycle() {
  //
  const isFirstMount = useFirstMountState()

  return { isFirstMount }
}

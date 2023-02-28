import { React } from '~/src/libs/packages'

// prettier-ignore
type Args = Parameters<typeof React.element.clone>[1] & {
  element:  Parameters<typeof React.element.clone>[0]
  children: React.Node[]
  disable?: boolean
}

// prettier-ignore
export function Clone({ element, disable, children, ...props }: Args) {
  
  if (disable)
  return null


  if (React.element.isValid(element)) 
  return React.element.clone(element, props, children)

  
  return null
}

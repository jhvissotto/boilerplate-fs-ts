import { React } from '~/src/libs/packages'
import { tag } from '~/src/libs/helpers'

// prettier-ignore
type Args = Parameters<typeof React.element.create>[1] & {
  // tag:      Parameters<typeof React.element.create>[0]
  tag:      tag.All
  children: React.Node[]
  disable?: boolean
}

// prettier-ignore
export function Create({ tag, disable, children, ...props }: Args) {
  
  if (disable) 
  return null

  
  return React.element.create(tag, props, children)
}

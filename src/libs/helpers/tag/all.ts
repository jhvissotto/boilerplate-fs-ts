// prettier-ignore
import type { 
  Head,
  Layout,
  Part,
  Media,
  Action,
  Data,
  Text,
} from '.'

// prettier-ignore
import { 
  head,
  layout,
  part,
  media,
  action,
  data,
  text,
} from '.'

// prettier-ignore
export type All =
  | 'html'
  | Head
  | Layout
  | Part
  | Media
  | Action
  | Data
  | Text

export const all = {
  html: 'html',
  head,
  layout,
  part,
  media,
  action,
  data,
  text,
}

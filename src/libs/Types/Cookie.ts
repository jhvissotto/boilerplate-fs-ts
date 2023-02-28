import type { CookieSerializeOptions } from 'cookie'

export module Cookie {
  // prettier-ignore
  export interface Options extends CookieSerializeOptions {
    domain?:    string  | undefined
    encode?     (value: string): string
    expires?:   Date    | undefined
    httpOnly?:  boolean | undefined
    maxAge?:    number  | undefined
    path?:      string  | undefined
    sameSite?:  true    | false | 'lax' | 'strict' | 'none' | undefined
    secure?:    boolean | undefined
  }
}

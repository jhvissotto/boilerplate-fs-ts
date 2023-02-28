import { cookie } from '~/src/libs/extensions/next'

export function Example() {
  // prettier-ignore
  class handler {
    static cookie = class {
      static has  = () => console.log(cookie.has('client-cookie'))
      static get  = () => console.log(cookie.get('client-cookie'))
      static gets = () => console.log(cookie.gets())
      static set  = () =>             cookie.set('client-cookie', 'mock client value')
      static del  = () =>             cookie.del('client-cookie')
    }
  }

  return (
    <div>
      <h1>Next Cookies</h1>

      <button onClick={handler.cookie.has}>Check Cookie</button>
      <br />
      <button onClick={handler.cookie.get}>Get Cookie</button>
      <br />
      <button onClick={handler.cookie.gets}>Get Cookies</button>
      <br />
      <button onClick={handler.cookie.set}>Set Cookie</button>
      <br />
      <button onClick={handler.cookie.del}>Delete Cookie</button>
    </div>
  )
}

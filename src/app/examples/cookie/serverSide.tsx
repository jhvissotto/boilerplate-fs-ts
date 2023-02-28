import { cookie } from '~/src/libs/extensions/next'

export function Example() {
  return <div>SSR Cookies</div>
}

export const getServerSideProps = ({ req, res }) => {
  cookie.gets({ req, res })
  cookie.get('client-cookie', { req, res })
  cookie.set('ssr-cookie', 'mock-ssr-value', { req, res, maxAge: 24 * 60 * 60 })
  cookie.dels('client-cookie', { req, res })
  return { props: {} }
}

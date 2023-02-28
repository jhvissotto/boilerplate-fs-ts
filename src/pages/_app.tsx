// libs
import type { Next } from '~/src/libs/packages'
import { emotion, parsers } from '~/src/libs/helpers'
// app
import { Provider } from '~/src/react'
import { css } from '~/src/view/design'

//
// ================================================ //
// ==================== styles ==================== //
// ================================================ //
require('antd/dist/reset.css')
require(css.global_bootstrap)
require(css.global_tailwind)
require(css.global_vanilla)

//
// ====================================================== //
// ==================== initializers ==================== //
// ====================================================== //
const clientSide = emotion.cache_create()

//
//
// =================================================== //
// ==================== component ==================== //
// =================================================== //
export default function MyApp({
  // ==================== Props ==================== //
  Component: Page,
  pageProps,
  router,
  emotion_cache = clientSide.emotion_cache,
}: Next.AppProps & {
  // ==================== Types ==================== //
  emotion_cache?: Parameters<typeof Provider.Wrapper>[0]['emotion_cache']
}) {
  //
  //
  const { params, query } = parsers.next.router(router)

  //
  //
  // ==================== FC =================== //
  return (
    <Provider.Wrapper emotion_cache={emotion_cache}>
      <Page {...pageProps} />
    </Provider.Wrapper>
  )
}

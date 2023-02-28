// global
import { config } from '~/src/global'
// libs
import type { Helmet_Data } from '~/src/libs/packages/Helmet'
import { Next, Helmet } from '~/src/libs/packages'
import { Styled } from '~/src/libs/packages'
import { Chakra } from '~/src/libs/packages'
import { Emotion } from '~/src/libs/packages'
import { emotion } from '~/src/libs/helpers'
import { ts } from '~/src/libs/helpers'
// view
import { fonts, themes } from '~/src/view/design'

// const { with_Chakra } = config().view

//
//
//
export default class MyDocument extends Next.Document<{
  emotionStyleTags: Emotion.JSX.Element[]
  helmet: Helmet_Data
}> {
  // ================================================================ //
  // ============================ Helmet ============================ //
  // ================================================================ //
  // HTML
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // HEAD
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  // BODY
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  //
  // ================================================================ //
  // ============================ Render ============================ //
  // ================================================================ //
  render() {
    const emotionStyleTags = this.props?.emotionStyleTags
    return (
      <Next.Html
        lang="en"
        className={fonts.roboto.className}
        {...this.helmetHtmlAttrComponents}
      >
        {/* ============================ Head ============================ */}
        <Next.Head>
          {/* CONFIGS */}
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />

          {/* VIEWPORT */}
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* TEXTS */}
          <title>Title</title>
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />

          {/* PWA */}
          <link rel="manifest" href="/manifest.json" />

          {/* ICONS */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <link href="/icons/x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/icons/x32.png" rel="icon" sizes="32x32" type="image/png" />

          {/* COLORS */}
          <meta name="theme-color" content={themes.material.palette.primary.main} />

          {/* EMOTION */}
          <meta name="emotion-insertion-point" content="" />
          {emotionStyleTags}

          {this.helmetHeadComponents}
        </Next.Head>

        {/* ============================ Body ============================ */}
        <body {...this.helmetBodyAttrComponents}>
          <Chakra.Script_Color />
          <Next.Main />
          <Next.Script />
        </body>
      </Next.Html>
    )
  }
}

//
//
// ========================================================================= //
// ============================ getInitialProps ============================ //
// ========================================================================= //
MyDocument.getInitialProps = async (ctx: Next.Doc.Ctx) => {
  //
  const originalRenderPage = ctx.renderPage
  const initialProps = await Next.Document.getInitialProps(ctx)

  const helmet = Helmet.renderStatic()
  const styleTags = ts.getStyles()

  //
  // ==================== emotion ==================== //
  const { emotion_cache } = emotion.cache_create()
  const { extractCriticalToChunks } = Emotion.createServer(emotion_cache)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      key={style.key}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  //
  // ==================== styled ==================== //
  const sheet = new Styled.ServerSheet()
  try {
    // prettier-ignore
    ctx.renderPage = () => originalRenderPage({ 
        enhanceApp: (MyApp: any) => props => (
          sheet.collectStyles(<MyApp emotion_cache={emotion_cache} {...props} />)
        )
      })

    return {
      ...initialProps,
      helmet,
      emotionStyleTags,
      styles: (
        <>
          {initialProps.styles}
          <style id="typestyle-target">{styleTags}</style>
          {sheet.getStyleElement()}
        </>
      ),
    }
    // ================ error ================ //
  } catch (error) {
    console.warn('>> MyDocument Error:', error)
    // ================ finally ================ //
  } finally {
    sheet.seal()

    return {
      ...initialProps,
      helmet,
      emotionStyleTags,
      styles: (
        <>
          {initialProps.styles}
          <style id="typestyle-target">{styleTags}</style>
        </>
      ),
    }
  }
}

//
//
//
// ========================================== //
// ============ Resolution order ============ //
// ========================================== //

// ======= On server ======= //
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. document.getInitialProps
// 4. app.render
// 5. page.render
// 6. document.render

// ======= On server with error ======= //
// 1. document.getInitialProps
// 2. app.render
// 3. page.render
// 4. document.render

// ======= On client ======= //
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. app.render
// 4. page.render

//
//
//
//
//
//
//
//
//
// ======== possibility #1 ======== //
// styles: [
//   <>
//     {initialProps.styles}
//     <style id="typestyle-target">{styleTags}</style>
//   </>,
//   sheet.getStyleElement(),
// ],

// ======== possibility #2 ======== //
// styles: [
//   initialProps.styles,
//   <><style id="typestyle-target">{styleTags}</style></>,
//   sheet.getStyleElement(),
// ],

// ======== possibility #3 ======== //
// styles: (
//   <>
//     {initialProps.styles}
//     <style id="typestyle-target">{styleTags}</style>
//     {sheet.getStyleElement()}
//   </>
// ),

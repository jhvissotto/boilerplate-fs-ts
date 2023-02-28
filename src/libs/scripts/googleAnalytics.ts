// prettier-ignore
export function googleAnalytics(GOOGLE_ANALYTICS_ID) {

  window.dataLayer = window.dataLayer || []

  function gtag() {
    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', GOOGLE_ANALYTICS_ID)
}

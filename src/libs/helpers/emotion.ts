import { Emotion } from '~/src/libs/packages'
import { environment } from '~/src/libs/helpers'

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export function cache_create() {
  let insertionPoint

  if (environment.check().isClient) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    )
    insertionPoint = emotionInsertionPoint ?? undefined
  }

  const emotion_cache = Emotion.cache_create({ key: 'mui-style', insertionPoint })

  return { emotion_cache }
}

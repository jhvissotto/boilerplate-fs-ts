// global
import { config } from '~/src/global'
// libs
import { React } from '~/src/libs/packages'
import { Cache } from '~/src/libs/packages/Emotion'
// local
import { Chakra, Emotion, Material, Styled } from './Partials'

const { view } = config()

//
// prettier-ignore
export const Component: React.FCC<{
  // ==================== Types ==================== //
  emotion_cache: Cache
}> = ({
  // ==================== Props ==================== //
  children,
  emotion_cache,
}) => {


  return (
    <Styled         with_styled={view.with_Styled}>
      <Emotion      with_emotion={view.with_Emotion} cache={emotion_cache}>
        <Material   with_material={view.with_Material}>
          <Chakra   with_chakra={view.with_Material}>
            {children}
          </Chakra>
        </Material>
      </Emotion>
    </Styled>
  )
}

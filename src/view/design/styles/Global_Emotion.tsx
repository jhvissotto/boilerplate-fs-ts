import { React, Emotion } from '~/src/libs/packages'
import { tag } from '~/src/libs/helpers'

export const Global_Emotion: React.FC = () => {
  return (
    <Emotion.Style_Global
      // tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
      styles={tag.atr.css3`
        XWIND_BASE 
        XWIND_GLOBAL
        * {
          margin: 0; 
          padding: 0;
        }
      `}
    />
  )
}

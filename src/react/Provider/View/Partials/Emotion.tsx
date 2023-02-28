// libs
import { React } from '~/src/libs/packages'
import type { Cache } from '~/src/libs/packages/Emotion'
import { Cache_Provider } from '~/src/libs/packages/Emotion'
// view
import { Skip } from '~/src/view/html/Wrapper'

//
// prettier-ignore
export const Emotion: React.FCC<{ 
    with_emotion:   boolean,
    cache:          Cache, 
}> = ({ children, with_emotion, cache }) => {


    return with_emotion ? (
        <Cache_Provider value={cache} >
            {children}
        </Cache_Provider>
    ) : (
        <Skip>{children}</Skip>
    )
}

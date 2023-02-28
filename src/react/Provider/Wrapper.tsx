// libs
import { React } from '~/src/libs/packages'
// local
import { Provider } from '~/src/react'

//
// prettier-ignore
export const Wrapper: React.FCC<{
    // ================ Types ================ //
    emotion_cache: Parameters<typeof Provider.View>[0]['emotion_cache']
}> = ({ 
    // ================ Props ================ //
    children, 
    emotion_cache, 
}) => {

    // ================ FC ================ //
    return (
        <Provider.Redux>
            <Provider.Contexts>
                <Provider.View emotion_cache={emotion_cache} >
                    {children}
                </Provider.View>
            </Provider.Contexts>
        </Provider.Redux>
    )

}

// libs
import { React } from '~/src/libs/packages'
import { Provider } from '~/src/libs/packages/Chakra'
// view
import { themes } from '~/src/view/design'
import { Skip } from '~/src/view/html/Wrapper'

//
// prettier-ignore
export const Chakra: React.FCC<{ with_chakra: boolean }> = ({ children, with_chakra }) => {
    

    return with_chakra ? (
        <Provider theme={themes.chakra} >
            {children}
        </Provider>
    ) : (
        <Skip>{children}</Skip>
    )
}

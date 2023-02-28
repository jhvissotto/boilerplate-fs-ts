// libs
import { React } from '~/src/libs/packages'
import { Theme } from '~/src/libs/packages/Styled/modules'
// view
import { themes, Styles } from '~/src/view/design'
import { Skip } from '~/src/view/html/Wrapper'

//
// prettier-ignore
export const Styled: React.FCC<{ with_styled: boolean }> = ({ children, with_styled }) => {
    
    
    return with_styled ? (
        <Theme.Provider theme={themes.styled}>
            <Styles.Global_Styled />
            {children}
        </Theme.Provider>
    ) : (
        <Skip>{children}</Skip>
    )
}

// libs
import { React } from '~/src/libs/packages'
import { Theme_Provider, Style_Reset } from '~/src/libs/packages/Material'
// view
import { themes } from '~/src/view/design'
import { Skip } from '~/src/view/html/Wrapper'

//
// prettier-ignore
export const Material: React.FCC<{ with_material: boolean }> = ({ children, with_material }) => {
    
    
    return with_material ? (
        <Theme_Provider theme={themes.material}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Style_Reset />
            {children}
        </Theme_Provider>
    ) : (
        <Skip>{children}</Skip>
    )
}

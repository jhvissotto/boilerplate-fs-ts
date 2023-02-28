// libs
import { React } from '~/src/libs/packages'
// app
import { Ctx } from '~/src/react'

//
// prettier-ignore
export const Contexts: React.FCC = ({ children }) => {

    
    return (
        <Ctx.Main.Provider value={Ctx.main} >
            {children}
        </Ctx.Main.Provider>
    )
}

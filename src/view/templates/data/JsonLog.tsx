// libs
import { json } from '~/src/libs/helpers'
// view
import { Void } from '~/src/view/html/Wrapper'

type Params = Parameters<typeof json.log>

// prettier-ignore
export const JsonLog: React.FC = (...[input, consoleLog = false, space = 2]: Params) => {

    
    const data = json.log(input, consoleLog, space)


    if (data)
    return <pre>{data}</pre>

    else
    return <Void />
}

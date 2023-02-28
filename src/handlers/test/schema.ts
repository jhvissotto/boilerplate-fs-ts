// prettier-ignore
export module schema {
    export type Req = {
        params?: never
        query?:  never
        body?:   never
    }
    export type Res = {
        test: boolean
    }
}

// libs
import { Redux } from '~/src/libs/packages'

//
// prettier-ignore
export module redux {
  
  type CreateApi      = Parameters<typeof Redux.createApi>[0]
  type FetchBaseQuery = Parameters<typeof Redux.fetchBaseQuery>[0]

  
  export function create<
    BaseQuery   extends Redux.BaseQueryFn, 
    Definitions extends Redux.EndpointDefinitions, 
    ReducerPath extends string /* = 'api' */, 
    TagTypes    extends string /* = never */
  >(
    // ================ props ================ //
    { reducerPath, baseUrl }: {
      reducerPath:  CreateApi['reducerPath']
      baseUrl:      FetchBaseQuery['baseUrl']
    },
    // ================ options ================ //
    opts?: CreateApi & {
      fetchBaseQuery?: FetchBaseQuery
    }
  ) {
    
    
    return Redux.createApi<BaseQuery, Definitions, ReducerPath, TagTypes>({
      // ======== name ======== //
      // @ts-ignore
      reducerPath,


      // ======== baseUrl ======== //
      // @ts-ignore
      baseQuery: Redux.fetchBaseQuery({ baseUrl, ...opts?.fetchBaseQuery }),
      

      // ======== rehydration ======== //
      extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === Redux.HYDRATE) {
          return action.payload[reducerPath]
        }
      },

      // ======== endpoints ======== //
      // endpoints: builder => ({
      //   test: builder.query({ query: () => `/test` }),
      // }),


      ...opts,
    })
  

  }

  
}

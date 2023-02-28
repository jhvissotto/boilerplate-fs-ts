import type { EasyPeasyConfig, Store, State, Actions } from 'easy-peasy'
import { useLocalStore } from 'easy-peasy'

// prettier-ignore
export function Peasy
// ==================== generics ==================== //
<
  StoreModel extends object = {},
  StoreConfig extends EasyPeasyConfig<any, any> = EasyPeasyConfig<undefined, {}>
>
// ==================== generics ==================== //
(
  modelCreator: (prevState?: State<StoreModel>) => StoreModel,
  dependencies?: any[],
  storeConfig?: (prevState?: State<StoreModel>, prevConfig?: StoreConfig) => StoreConfig
)
// ==================== function ==================== //
{
    
    type Hook = [State<StoreModel>, Actions<StoreModel>, Store<StoreModel, StoreConfig>]


    const [state, actions, store] = useLocalStore(modelCreator, dependencies, storeConfig) as Hook


    return [state, actions, store, { state, actions, store }] as const
}

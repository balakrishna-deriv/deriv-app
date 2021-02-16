import * as React from 'react';
import { TCFDStore, TRootStore } from 'Types';
import RootStore from './root-store';

let stores_context: React.Context<TRootStore>;

export const useStores = (ws?: unknown): TRootStore => {
    if (!stores_context) {
        const root_store = new RootStore(ws);

        stores_context = React.createContext<TRootStore>({
            ui_store: root_store.ui_store,
            client_store: root_store.client_store,
            config_store: root_store.config_store,
            cfd_store: root_store.cfd_store as TCFDStore,
        });
    }

    return React.useContext(stores_context);
};

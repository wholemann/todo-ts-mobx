import React from 'react';
import { TStore, createStore } from './createStore';
import { useLocalStore, MobXProviderContext } from 'mobx-react';

const storeContext = React.createContext<TStore | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
}

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
}
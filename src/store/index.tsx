import { useLocalStore } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import React, { createContext, FC, useContext } from 'react';
import AppStore from './AppStore';
import UserStore from './UserStore';

//生成store的统一方法
const createStores = () => {
    //新增加一个store,在此创建一个实例即可
    return {
        appStore: new AppStore(),
        userStore: new UserStore(),
    };
};

const stores = createStores(); //类组件使用的store
const StoresContext = createContext(stores); // Context的封装,创建 Provider，通过 React.Context来注入,包裹函数组件,将hookStores注入到函数组件中
// hooks 使用笔记看这里 -> https://github.com/olivewind/blog/issues/1
const useStores = () => useContext(StoresContext); //hooks组件使用的store

type TTodoStore = ReturnType<typeof createStores>;
const TodoStoreContext = createContext<TTodoStore | null>(null);

// 创建 Provider，通过 React.Context 来注入
const TodoStoreProvider: FC = ({ children }) => {
    const hookStores = useLocalStore(createStores); //函数组件中hooks使用的store
    return (
        <TodoStoreContext.Provider value={hookStores}>
            {children}
        </TodoStoreContext.Provider>
    );
};

export { stores, TodoStoreProvider, useStores };

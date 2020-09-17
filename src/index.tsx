import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN'; // 引入中文包
import { Provider } from 'mobx-react';
import 'moment/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { stores, TodoStoreProvider } from './store';

//message全局配置
message.config({
    duration: 2,
    maxCount: 1,
});

const appStart = () => {
    return ReactDOM.render(
        <ConfigProvider locale={zhCN}>
            {/*集成store在function和class组件中可用的方式*/}
            <Provider {...stores}>
                <TodoStoreProvider>
                    <App />
                </TodoStoreProvider>
            </Provider>
        </ConfigProvider>,
        document.getElementById('root')
    );
};

appStart();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

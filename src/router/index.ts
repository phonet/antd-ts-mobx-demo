import Home from '../page/home';
import Login from '../page/login';

export interface IRouterProps {
    name?: string;
    path: string;
    component: any;
    needLogin?: boolean;
}

const routers: IRouterProps[] = [
    { name: '首页', path: '/', component: Home, needLogin: true },
    { name: '登录', path: '/login', component: Login, needLogin: false },
];

export default routers;

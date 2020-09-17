import { action, observable } from 'mobx';
export default class UserStore {
    @observable public loading: boolean = false;
    @observable public loginSuccess: boolean = false;

    //登陆
    @action
    public loginAction() {
        this.loading = true;
        setTimeout(() => {
            this.loginSuccess = true;
            this.loading = false;
            sessionStorage.setItem('token', 'logingedddd');
        }, 1000);
    }

    //退出
    @action
    public loginOutAction() {
        this.loginSuccess = false;
        sessionStorage.setItem('token', '');
    }
}

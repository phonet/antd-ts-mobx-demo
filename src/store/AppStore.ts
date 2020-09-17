import { action, observable } from 'mobx';

export interface IMenus {
    id?: number | string;
    name?: string;
    menuUri?: string;
    icon?: string;
    menuLevel?: number;
    children?: IMenus[] | null;
}

//全局的store
export default class AppStore {
    @observable public currentItem: IMenus = {};
    @observable public loadingPage: boolean = false;

    /**
     * 设置当前选择的菜单
     * @param newItem
     */
    @action
    public setCurrentItemAction(newItem: IMenus) {
        this.currentItem = newItem;
        // this.loadingPage = true;
    }

    @action
    public loadedAction() {
        this.loadingPage = !this.loadingPage;
    }
}

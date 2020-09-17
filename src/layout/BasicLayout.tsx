import { Button, Layout, Menu } from 'antd';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { RouteComponentProps } from 'react-router-dom';
import AppStore from '../store/AppStore';
import UserStore from '../store/UserStore';
import styles from './BasicStyle.module.less';

interface IBasicLayoutProps extends RouteComponentProps {
    title?: string;
    loading?: boolean;
    appStore?: AppStore;
    userStore?: UserStore;
}

interface IBasicLayoutState {}

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

/**
 * 基础布局组件
 */

@inject('appStore', 'userStore')
@observer
export default class BasicLayout extends Component<
    IBasicLayoutProps,
    IBasicLayoutState
> {
    constructor(props: IBasicLayoutProps) {
        super(props);
    }

    componentDidMount() {}

    render() {
        const { userStore } = this.props;
        let layout = (
            <DocumentTitle title={'系统'}>
                <Layout>
                    <Header className={styles.header}>
                        <div>菜单</div>
                        <Button
                            onClick={() => {
                                //this.props.history.push('/login');
                                userStore?.loginOutAction();
                            }}
                        >
                            退出
                        </Button>
                    </Header>

                    <Content className={styles.main} id="mainContainer">
                        {this.props.children}
                    </Content>
                </Layout>
            </DocumentTitle>
        );
        return layout;
    }
}

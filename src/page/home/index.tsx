import React, { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

//登录系统进入的首页
export default function Home({ history }: Props): ReactElement {
    return (
        <>
            <div style={{ textAlign: 'center', paddingTop: 30, fontSize: 24 }}>
                欢迎使用系统
            </div>
        </>
    );
}

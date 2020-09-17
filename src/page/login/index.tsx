import { Button, Checkbox, Form, Input } from 'antd';
import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useStores } from '../../store';

interface Props extends RouteComponentProps {}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

//登录页面
function Login({ history }: Props): ReactElement {
    const { userStore } = useStores();
    const { loading, loginSuccess } = userStore;

    const onFinish = (values: any) => {
        userStore.loginAction();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    //登录了之后要跳转到home页面
    const token: string | null = sessionStorage.getItem('token');
    if (loginSuccess || (token && token.length > 0)) {
        return <Redirect to={'/'} />;
    }
    return (
        <div style={{ width: 300, margin: '100px auto' }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>记住登录</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default observer(Login);

import { Button } from "antd";
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

interface INoMatchPageProps extends RouteComponentProps {

}

interface INoMatchPageState {

}

/**
 * 404 page
 */
export default class NoMatchPage extends Component<INoMatchPageProps, INoMatchPageState> {
    constructor(props: INoMatchPageProps) {
        super(props);
    }

    render() {
        return (
            <div style={{textAlign: 'center', padding: 30}}>
                <div style={{fontSize: 40}}>404~</div>
                <Button type="primary"
                        onClick={() => {
                            this.props.history.replace('/')
                        }}>
                    返回
                </Button>
            </div>
        );
    }
}

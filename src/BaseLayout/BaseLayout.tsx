import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from './BaseLayout.styles';

export class BaseLayout extends React.Component<{}>{
    static getDerivedStateFromProps(_props: any, _state: any) {
        console.log("deriving state");
        return null;
    }

    public getSnapshotBeforeUpdate() {
        console.log("snapshot!");
        return null;
    }

    public componentDidCatch(_error: any, _info: any) {
        console.log("ComponentDidCatch");
    }

    public componentDidUpdate() {
        console.log("ComponentDidUpdate");
    }

    public componentDidMount() {
        console.log("ComponentDidMount");
    }

    public componentWillReceiveProps(nextProps: {}) {
        console.log("componentWillReceiveProps");
    }

    public shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true;
    }

    public componentWillMount() {
        console.log("ComponentWillMount");
    }

    public componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    public componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    public render() {
        console.log("rendering!");
        return (
            <h1 className={css(styles.header)}>This was server rendered</h1>
        );
    }
}
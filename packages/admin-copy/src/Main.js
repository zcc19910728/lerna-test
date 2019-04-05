// 组件写这里
import React, { Component } from 'react';

class Main extends Component {

    static defaultProps = {
        value: undefined,
        onChange: (value) => {}
    }

    render() {
        return (
            <div>I am component</div>
        );
    }

}

export default Main
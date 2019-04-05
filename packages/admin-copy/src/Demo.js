// 组件demo写这里
import React, { Component } from 'react';
import Copy from './Main';

class Demo extends Component {
    callback = (e) => console.log(666);

    render() {
        return (
            <div style={{padding: 20}}>
                <Copy callBack={this.callback} text="展示文本" copyData="复制文本" />
            </div>
        );
    }

}

export default Demo
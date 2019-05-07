// 组件demo写这里
import React, { Component } from 'react';
import { message } from 'antd';
import Copy from './Main';

class Demo extends Component {
    constructor(props) {
        super(props);

        this.text = '我是666'
    }

    callback = (text, success) => {
        if(success){
            message.success(`复制成功，内容: ${text}`);
            return;
        }
        message.error(`复制失败`);
    }

    render() {
        return (
            <div style={{padding: 20}}>
                {this.text}
                <Copy style={{marginLeft: 10, display: 'inline-block'}} callBack={this.callback} copyData={this.text}>
                    <span style={{cursor: 'pointer', color: '#1890ff'}}>复制</span>
                </Copy>
            </div>
        );
    }

}

export default Demo
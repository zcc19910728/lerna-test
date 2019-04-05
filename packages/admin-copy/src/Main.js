// 组件写这里
import React, { Component} from 'react';
import { message } from 'antd';

export default class Main extends Component {

    copy = () => {
        const { callBack } = this.props;

        this.refs.copyInput.select(); // 选中赋值过的input
        let tag = document.execCommand("Copy"); // 执行复制

        if(tag){
            message.success('复制成功');
            callBack && callBack();
        }
    }

    linkStyle = {
        color: '#1890ff',
        outline: 'none',
        cursor: 'pointer',
        marginLeft: 10,
    }
    
    render() {
        const { copyData, text } = this.props;

        return (
            <div className="d-ib">
                <input ref="copyInput" type="text" style={{opacity: 0,width: 10}} defaultValue={copyData}/>
                {text}    
                <a style={this.linkStyle} onClick={this.copy}>复制</a>
            </div>
        );
    }
}
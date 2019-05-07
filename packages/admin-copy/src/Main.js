// 组件写这里
import React, { Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class Main extends Component {
    render() {
        const { callBack, copyData = ' ', ...otherProps } = this.props;

        return (
            <CopyToClipboard onCopy={callBack} text={copyData}  { ...otherProps }>
                <div style={{display: 'inline-block'}}>
                    { this.props.children ? React.Children.map(this.props.children, function (value,key) {
                        return value;
                    }) : ''}
                </div>
            </CopyToClipboard>
        );
    }
}
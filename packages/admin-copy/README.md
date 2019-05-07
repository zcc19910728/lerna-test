---
module: 基础组件
title: admin-copy
author: 酱爆
---

# admin-copy
复制文本的admin基础组件

## Demo

```jsx
import React, { Component } from 'react';
import { message } from 'antd';
import Copy from '@yt/admin-copy';

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
```

## API

|参数|类型|默认值|描述|
|:--:|:--:|:-----:|:-----|
| copyData | String | 空 | 要复制的文本|
| callBack | Fun | 空 | 复制成功后的回调|
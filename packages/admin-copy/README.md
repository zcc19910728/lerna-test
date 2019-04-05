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
import Copy from '@yt/admin-copy';

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
```

## API

|参数|类型|默认值|描述|
|:--:|:--:|:-----:|:-----|
| text | String | 空 | 展示的文本|
| copyData | String | 空 | 要复制的文本|
| callBack | Fun | 空 | 复制成功后的回调|
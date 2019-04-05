// 组件demo写这里
import React, { Component } from 'react';
import Main from './Main';

class Demo extends Component {

    render() {
        return (
            <div style={{padding: 20}}>
                <Main value={''} onChange={() => {}}/>    
            </div>
        );
    }

}

export default Demo
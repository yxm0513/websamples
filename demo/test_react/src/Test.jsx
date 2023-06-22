import React, { Component } from 'react';
import { Button, Toast } from '@douyinfe/semi-ui';

class Demo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <Button onClick={() => Toast.warning({ content: 'welcome' })}>Simon</Button>;
    }
}

export default Demo;
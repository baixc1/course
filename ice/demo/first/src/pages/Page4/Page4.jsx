import React, { Component } from 'react';
import { Button } from '@icedesign/base';

export default class Page4 extends Component {
  static displayName = 'Page4';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page4-page" >
        <Button type="normal">普通按钮</Button> &nbsp;&nbsp;
        <Button type="primary">主要按钮</Button> &nbsp;&nbsp;
        <Button type="secondary">次要按钮</Button>
      </div>
    )
  }
}

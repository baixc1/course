import React, { Component } from 'react';
import ChartBar from './components/ChartBar';
import ChartPie from './components/ChartPie';

export default class Page5 extends Component {
  static displayName = 'Page5';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page5-page">
        <ChartBar />
        <ChartPie />
      </div>
    );
  }
}

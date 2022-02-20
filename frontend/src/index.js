import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import BarChart from './BarChart.js';

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MoneyCollectOutlined, CommentOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'map',
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 123
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="map" icon={<EnvironmentOutlined />}>
            Crime Map
          </Menu.Item>
          <Menu.Item key="report" icon={<PhoneOutlined />}>
            Report Crime
          </Menu.Item>
          <Menu.Item key="fund" icon={<MoneyCollectOutlined />}>
            Go Fund me
          </Menu.Item>
          <Menu.Item key="forum" icon={<CommentOutlined />}>
            Forum
          </Menu.Item>
        </Menu>
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Menu } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MoneyCollectOutlined, CommentOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
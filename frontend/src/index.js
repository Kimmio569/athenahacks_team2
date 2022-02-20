import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import BarChart from './BarChart.js';

import 'antd/dist/antd.css';
import { Menu, Layout } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MoneyCollectOutlined, CommentOutlined } from '@ant-design/icons';

const { Content, Header } = Layout;
class App extends React.Component {
  state = {
    menuTab: 'map',
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 123
  };

  components = {
    'map': <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />,
    'report': <div>Option 2</div>,
    'fund': <div>Option 3</div>,
    'forum': <div>Option 4</div>
  };

  handleMenuClick = e => {
    console.log('click ', e);
    this.setState({ menuTab: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Header>
          <Menu onClick={this.handleMenuClick} selectedKeys={[current]} mode="horizontal">
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
        </Header>
        <Layout>
          <Content>{this.components[this.state.menuTab]}</Content>




        </Layout>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

import { Sider, Header} from '../components/Layout';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

class Main extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return(
      <Layout>
      <Sider/>
         <Layout>
           <Header/>
           <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 1000 }}>
             Content
           </Content>
         </Layout>
       </Layout>
    )
  }
}


export default Main;

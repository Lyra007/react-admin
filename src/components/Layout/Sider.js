import React, { Component } from 'react';
import { Layout } from 'antd';
import styles from  './Sider.css';
import Menu from './Menu';

const {Sider } = Layout;

class SiderBar extends Component {
  state = {
    collapsed: false
  }
  render() {
    return (
      <Sider
        style={{ position: 'fixed', left: 0, height: '100%' }}
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}>
        <div className={styles.logo} />
        <Menu/>
      </Sider>
    );
  }
}

export default SiderBar;

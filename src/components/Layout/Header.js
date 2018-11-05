import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import styles from  './Header.css';

const { Header } = Layout;

class HeaderBar extends Component {
  state = {
    collapsed: false
  }

  render() {
    return (
      <Header style={{ position: 'fixed',   background: 'rgba(255,255,255,.2)', left: '232px', width: '100%'}}>
        <Icon
          className={styles.trigger}
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <span>React Admin system</span>
      </Header>
    );
  }
}

export default HeaderBar;

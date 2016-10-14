import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'dva/router';
import styles from './HeaderLayout.less'
import classNames from 'classnames'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends React.Component {
  render() {
    const head = styles.headerCls
    const topFixed = styles.topFixed
    const headClass = classNames({head: true, clearfix: true, topFixed: true})
    return (
      <header className={headClass}>
        <div>
          <div>
            <a className={styles.logo} href="/">
              <img alt="logo" src="https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-128.png"/>
              <span>私人定制</span>
            </a>
          </div>
          <div>
            <Menu mode="horizontal">
              <Menu.Item key="home">
                <Link to="/users">
                  <Icon type="home"/>
                  users
                </Link>
              </Menu.Item>
              <Menu.Item key="timeline">
                <Link to="/timeline">
                  <Icon type="calendar"/>
                  timeline
                </Link>
              </Menu.Item>
              <Menu.Item key="heart">
                <a href="http://119.29.197.107/Love.html" target="_blank" rel="noopener noreferrer"><Icon type="heart"/>Time</a>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </header>
    );
  }
}

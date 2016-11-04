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
              <Menu.Item key="marks">
                <Link to="/marks">
                  <Icon type="calendar"/>
                  Mark记录
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </header>
    );
  }
}

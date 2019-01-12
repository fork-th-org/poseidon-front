import React, {Component} from 'react';
import '../styles/topbar.css';
import {Link} from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
      <div className="site-topbar" id="topbar">
        <div id="container">
          <ul className="list1">
            <li><a>小米商城</a><span>|</span></li>
            <li><a>MIUI</a><span>|</span></li>
            <li><a>loT</a><span>|</span></li>
            <li><a>云服务</a><span>|</span></li>
            <li><a>金融</a><span>|</span></li>
            <li><a>有品</a><span>|</span></li>
            <li><a>小爱开发平台</a><span>|</span></li>
            <li><a>政企服务</a><span>|</span></li>
            <li><a>下载app</a><span>|</span></li>
            <li><a>Select Region</a></li>
            <div className="clear"></div>
          </ul>
          <ul className="list2">
            <li><Link to="/login">登录</Link><span>|</span></li>
            <li><Link to="/register">注册</Link><span>|</span></li>
            <li><Link to="/login">消息通知</Link></li>
            <li><Link to="/login">购物车</Link></li>
            <div className="clear"></div>
          </ul>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default TopBar;

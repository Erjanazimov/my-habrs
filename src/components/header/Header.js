import React from 'react';
import HeaderNav from './Header.module.css';

class Header extends React.Component{
    render(){
      return (
        <div className={HeaderNav.headerNav}>
        <a className={HeaderNav.logo} href="#">HABR</a>
        <div className={HeaderNav.header_right}>
            <a className={HeaderNav.active_blue} href="#home">Все</a>
            <a className={HeaderNav.active_fons} href="#">Новости</a>
            <a className={HeaderNav.active_fons} href="#">Статьи</a>
        </div>
    </div>
      )
    }
  }

  export default Header;


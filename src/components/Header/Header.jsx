import React from 'react';
import './Header.scss';

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const modal = () => {
    setOpenMenu((prevState) => {
      return !prevState;
    });
  };
  return (
    <section className="header">
      <ul className="flex items-center justify-between">
        <li>
          <img className="w-[120px] h-[70px]" src="./uzit-logo.png" alt="logo" />
        </li>
        <li className="burger-menu">
          <div className="app__header-burger-menu" onClick={modal}>
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className={`burger-item ${openMenu ? 'vector-active1' : ''}`}></div>
            <div className={`burger-item ${openMenu ? 'vector-active2' : ''}`}></div>
            <div className={`close-vector ${openMenu ? 'vector-active' : ''}`}></div>
            <div className={`close-vector2 ${openMenu ? 'vector-active' : ''}`}></div>
          </div>
        </li>
      </ul>
    </section>
  );
}

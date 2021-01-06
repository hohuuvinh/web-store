import React from 'react';
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div style={{ width: '150px', height: '100vh', background: 'white', position: 'fixed', zIndex: 99, paddingTop: '90px', display: 'none' }}>
        <p className="mt-4 ml-3" style={{ color: 'black', fontWeight: 'bold', fontSize: '110%' }}>Trang chủ</p>
        <p className="mt-4 ml-3" style={{ color: 'black', fontWeight: 'bold', fontSize: '110%' }}>Tính năng</p>
        <p className="mt-4 ml-3" style={{ color: 'black', fontWeight: 'bold', fontSize: '110%' }}>Công nghệ</p>
        <p className="mt-4 ml-3" style={{ color: 'black', fontWeight: 'bold', fontSize: '110%' }}>Bảng giá</p>
        <p className="mt-4 ml-3" style={{ color: 'black', fontWeight: 'bold', fontSize: '110%' }}>Hỗ trợ</p>
      </div>
      <div className="container-fluid p-3 sdhd" style={{ height: '70px', position: 'fixed', background: '#fff', width: '100%', zIndex: 999 }}>
        <div id="logo--box" className="float-left" style={{ width: '160px', height: '40px', display: 'flex' }}>
          <h2 className="font-weight-bold">WEB</h2><h2 className="cl font-weight-bold">store</h2>
        </div>
        <div id="search--box" className="float-left pl-4 pr-4" style={{ width: 'calc(100% - 160px - 620px)', height: '40px' }}>
          <div className="shadow-sm pl-2" style={{ height: '40px', width: '100%' }}>
            <input className=" float-left" type="text" name style={{ border: 0, width: 'calc(100% - 50px)', height: '100%', outline: 'none' }} />
            <div className="float-right bg p-2 pl-3" style={{ width: '50px', height: '40px' }}><i className="fa fa-search text-white" aria-hidden="true" /></div>
          </div>
        </div>
        <div id="menu--box" className="float-right" style={{ width: '620px', height: '40px' }}>
          <ul className="p-2" style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0, float: 'right' }}>
            <li exact to="/" className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>
              <NavLink exact to="/" style={{textDecoration:'none',color:'black'}}>Trang chủ</NavLink>
            </li>
            <li className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>Tính năng</li>
            <li className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>Công nghệ</li>
            <li className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>Bảng giá</li>
            <li className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>Hỗ trợ</li>
          </ul>
        </div>
        <div id="menu--box__reponsive" className="float-right text-center" style={{ width: '40px', height: '40px', display: 'none' }}>
          <i className="fa fa-bars " aria-hidden="true" style={{ fontSize: '200%', lineHeight: '40px' }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
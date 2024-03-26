import React from "react";
import "@styles/header.css";
import logo from "@assets/afeksi-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="app-bar">
        <div className="app-bar__tittle">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="menu-icon">
          <svg
            className="material-icons"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="#3d5a80"
              d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
            ></path>
          </svg>
        </div>
        <nav id="drawer" className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Beranda</a>
            </li>
            <li className="nav-item">
              <a href="#">Layanan</a>
            </li>
            <li className="nav-item">
              <a href="#">Kegiatan</a>
            </li>
            <li className="nav-item">
              <a href="#">Tentang Kami</a>
            </li>
            <li className="nav-item">
              <a href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a href="#">Karir</a>
            </li>
            <li className="nav-item">
              <a href="#" id="login">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

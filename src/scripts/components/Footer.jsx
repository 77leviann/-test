import React from "react";
import "@styles/footer.css";
import logo from "@assets/afeksi-logo.png";
import logoInstagram from "@assets/instagram.png";
import logoTwitter from "@assets/twitter.png";
import logoYoutube from "@assets/youtube.png";
import logoTiktok from "@assets/tiktok.jpg";
import logoLinkedin from "@assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-left__top">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="footer-address">
            <p>Jl. Gubeng Jaya IX no.1 Surabaya, Indonesia</p>
            <p>Contact: +6282142625552</p>
            <p>Email: afeksidn@gmail.com</p>
          </div>
        </div>
        <div className="footer-left__middle">
          <p>
            Afeksi merupakan Plafrom layanan edukasi dan konsultasi kesehatan
            hubungan berbasing psikologi pertama di indonesia
          </p>
        </div>
        <div className="footer-left__bottom">
          <a href="link-sosmed">
            <img src={logoInstagram} alt="Logo Instagram" className="logo-sosmed" />
          </a>
          <a href="link-sosmed">
            <img src={logoTwitter} alt="Logo Twitter" className="logo-sosmed" />
          </a>
          <a href="link-sosmed">
            <img src={logoYoutube} alt="Logo Youtube" className="logo-sosmed" />
          </a>
          <a href="link-sosmed">
            <img src={logoTiktok} alt="Logo Tiktok" className="logo-sosmed" />
          </a>
          <a href="link-sosmed">
            <img src={logoLinkedin} alt="Logo Linkedin" className="logo-sosmed" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right__group">
          <h4>Layanan</h4>
          <ul>
            <li>Konseling</li>
            <li>Mentoring</li>
          </ul>
        </div>
        <div className="footer-right__group">
          <h4>Tentang Kami</h4>
          <ul>
            <li>Webinar</li>
            <li>Campaign</li>
            <li>Karir</li>
            <li>Rekap History</li>
          </ul>
        </div>
        <div className="footer-right__group">
          <h4>Yang Lainnya</h4>
          <ul>
            <li>Kebijakan Privasi</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

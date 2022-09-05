import React from "react";
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer_icons_section">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterSquare />
        </a>
      </div>
      <ul className="footer_txt_section">
        <li>Info</li>
        <li>Support</li>
        <li>Marketing</li>
      </ul>
      <ul className="footer_txt_section">
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>
      <p className="footer_end_txt">&#169; 2022 Apple Inc.</p>
    </div>
  );
};

export default Footer;

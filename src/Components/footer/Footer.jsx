import React from "react";
import footerStyle from "./footer.module.css";
import facebook from "../Home/images/Facebook_Logo_(2019).png";
import outofbox from "../Home/images/outofboximg.jpg";
import instagram from "../Home/images/insta.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={footerStyle.main}>
      <div className={footerStyle.text}>
        <h3 className={footerStyle.head}> About Us</h3>
        <div className={footerStyle.content}>
          "We are senior mass communication students in the PR Department who
          aspire to help the youth find their career paths either after or
          during their studies."
        </div>
      </div>
      <div className={footerStyle.imgdiv}>
        <img src={outofbox} className={footerStyle.img} />
      </div>

      <div className={footerStyle.text}>
        <h3 className={footerStyle.head}> Contact Us</h3>
        <div className={footerStyle.content}>
          <img src={facebook} />
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
}

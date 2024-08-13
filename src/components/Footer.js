import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h1>Find us on:</h1>
      <div>
        <ul>
          <li>
            
            {" "}
            <a href="https://www.instagram.com/novapioneer"><FaInstagram color="white" /></a>
          </li>
          <li>
         
            <a href="https://www.facebook.com/novapioneerkenya/"> <FaFacebook color="white" /></a>
          </li>
          <li>
         
            <a href="https://x.com/nova_pioneer"> <FaXTwitter color="white" /></a>
          </li>
          <li>
         
            <a href="#"> <AiFillTikTok color="white" /></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

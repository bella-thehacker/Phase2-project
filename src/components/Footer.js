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
            
            <a href="https://www.instagram.com/novapioneer">
              <FaInstagram color="white" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/novapioneerkenya/">
              
              <FaFacebook color="white" />
            </a>
          </li>
          <li>
            <a href="https://x.com/nova_pioneer">
              
              <FaXTwitter color="white" />
            </a>
          </li>
          <li>
            <a href="#">
              
              <AiFillTikTok color="white" />
            </a>

          </li>
        </ul>

        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.919433964905!2d-113.95035155847674!3d50.888201471797124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53719d3df4b50a79%3A0xed371106ca43712b!2sBayside%20School%20%7C%20Calgary%20Board%20of%20Education!5e0!3m2!1sen!2ske!4v1723619498712!5m2!1sen!2ske" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </footer>

  );
}

export default Footer;

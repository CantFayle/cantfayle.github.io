import React from "react";
import qrSquare from '../assets/qr-square.png';
import '../App.css';

export default function Contact() {
  return (
    <div className="contact">
      <a href="https://github.com/CantFayle" className="contact-link">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/conor-fayle-6731ba130/" className="contact-link">
        LinkedIn
      </a>
      <img src={qrSquare} className="qr" alt={"QR"}/>
    </div>
  );
}
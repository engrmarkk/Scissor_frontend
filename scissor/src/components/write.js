import React from 'react';
import '../css/Write.css';
import { Link } from "react-router-dom";

function Write() {
  return (
    <div className='div1'>
        <h1 className='head'>We shorten links and generate QR code</h1>
        <p className='para'>Scissor is a free URL shortener that provides QR code for your long URL.</p>
        <Link className='start' to="/login">Get Started</Link>
    </div>
  );
}

export default Write;

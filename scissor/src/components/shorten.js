import React from "react";
import "../css/shorten.css";
import { Link } from "react-router-dom";


function ShortenUrl(){
    return (
        <div className="shot">
            <h2>Shorten URL</h2>
            <form>
                <input type="text" placeholder="Enter URL here" />
                <button type="submit">Shorten</button>
            </form>
            <div className="details">
                <p>Short URL: <a href="https://shorturl.com/abc123">https://shorturl.com/abc123</a></p>
                <p>Original URL: <a href="https://example.com">https://example.com</a></p>
                <p>QR Code: <br /> <img className="imgg" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://shorturl.com/abc123" alt="QR Code" /></p>
            </div>
            <div className="b2d-div">
            <Link to="/dashboard" className="b2d">Dashboard</Link>
            </div>
        </div>
    )
}

export default ShortenUrl;

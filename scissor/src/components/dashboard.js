import React from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";


function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>

        <div className="user-profile">
            <h2>User Profile</h2>
            <p>Username: <span>admin</span></p>
            <p>Email: <span>
                <a href="mailto: s.com">s.com</a>
            </span></p>
            <p>Account Created: <span>2021-01-01</span></p>


        </div>

        <div className="shorten-url">
            <Link to="/shorten-url" className="link-url">Shorten URL</Link>
        </div>
        
        <div className="stats">
          <h2>Stats</h2>
          <p>Total URLs: 50</p>
          <p>Shortened URLs: 30</p>
          <p>Clicks: 100</p>
        </div>
        
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Shortened "https://example.com"</li>
            <li>Shortened "https://google.com"</li>
            <li>Clicked on "https://example.com"</li>
          </ul>
        </div>
        
        <div className="url-list">
          <h2>URL List</h2>
          <ul>
            <li>
              <div>
                <p>Original URL: <a href="https://example.com">https://example.com</a></p>
                <p>Short URL: <a href="https://shorturl.com/abc123">https://shorturl.com/abc123</a></p>
                <p>Clicks: 10</p>
              </div>
            </li>
            <li>
              <div>
                <p>Original URL: <a href="https://google.com">https://google.com</a></p>
                <p>Short URL: <a href="https://shorturl.com/xyz456">https://shorturl.com/xyz456</a></p>
                <p>Clicks: 20</p>
              </div>
            </li>
            <li>
              <div>
                <p>Original URL: <a href="https://example.org">https://example.org</a></p>
                <p>Short URL: <a href="https://shorturl.com/def789">https://shorturl.com/def789</a></p>
                <p>Clicks: 5</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default Dashboard;

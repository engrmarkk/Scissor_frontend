import React from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import QRCode from 'qrcode.react';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [user_links, setUserLinks] = useState([]);
  // const [dashboard, setDashboard] = useState([]);
  // ...

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // Get the token from local storage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the authorization header with the "Bearer" prefix
      },
    };

    axios
      .get(`${BASE_URL}/dashboard`, config) // Fetch data from the first link
      .then((response) => {
        // Process the data
        const users = response.data;
        const user_links = response.data.user_links;
        setUserLinks(user_links);
        setUsers(users);
        // ...

        // Fetch data from another link within the same file
        // return axios.get(`${BASE_URL}/all-link`, config);
      })
      // .then((response) => {
      //   // Process the data from the other link
      //   const otherData = response.data;
      //   setDashboard(otherData);
      // ...
      // })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="user-profile">
        <h2>User Profile</h2>
        <p>
          Username: <span>{users.username}</span>
        </p>
        <p>
          Email:{" "}
          <span>
            <a href={`mailto:${users.email}`}>{users.email}</a>
          </span>
        </p>
        <p>
          First Name: <span>{users.first_name}</span>
        </p>
        <p>
          Last Name: <span>{users.last_name}</span>
        </p>
      </div>

      <div className="shorten-url">
        <Link to="/shorten-url" className="link-url">
          Shorten URL
        </Link>
      </div>

      <div className="url-list">
        <h2>URL List</h2>
        <ul>
          {user_links.map((item) => (
            <li key={item.id}>
              <div>
                <p>
                  Original URL: <a href={item.url}>{item.url}</a>
                </p>
                <p>
                  Short URL: <a href={item.short_url}>{item.short_url}</a>
                </p>
                <p>
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.short_url}`} alt="QR Code" />
                </p>
                <p>Clicks: {item.visit}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import QRCode from 'qrcode.react';
import api from "./refresh_t";
import {FaClone} from "react-icons/fa"
import {FaTrashAlt} from "react-icons/fa"


function Dashboard() {
  const [users, setUsers] = useState([]);
  const [userLinks, setUserLinks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`${BASE_URL}/dashboard`, config)
      .then((response) => {
        const users = response.data;
        const userLinks = response.data.user_links;
        setUserLinks(userLinks);
        setUsers(users);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
    alert("URL Copied!");
  };

  const handleDeleteRecord = (shortUrl) => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const lastFiveChars = shortUrl.slice(-5);

    axios
  .post(`${BASE_URL}/delete-url/${lastFiveChars}`, {}, {
    ...config,
    withCredentials: true,
  })
  .then((response) => {
    if (response.status === 200) {
      // Delete the record from the userLinks state
      const updatedUserLinks = userLinks.filter(
        (link) => link.short_url !== shortUrl
      );
      setUserLinks(updatedUserLinks);
      setTimeout(() => {
        alert("Record deleted successfully!");
      }, 1000);
    } else {
      throw new Error("Failed to delete record");
    }
  })
  .catch((error) => {
    console.error(error);
    alert("Error occurred while deleting the record");
  });


  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="user-profile">
        <h2>User Profile</h2>
        <p className="title-head">
          Username: <span>{users.username}</span>
        </p>
        <p className="title-head">
          Email:{" "}
          <span>
            <a href={`mailto:${users.email}`}>{users.email}</a>
          </span>
        </p>
        <p className="title-head">
          First Name: <span>{users.first_name}</span>
        </p>
        <p className="title-head">
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
        <ul className="ul-list">
          {userLinks
            .slice()
            .reverse()
            .map((item) => (
              <li key={item.id} className="li-list">
                <div>
                  <p>
                    Original URL:{" "}
                    <a href={item.url} target="_blank">
                      {item.url}
                    </a>
                  </p>
                  <p>
                    Short URL:{" "}
                    <div className="myshort">
                      <a href={item.short_url} target="_blank">
                        {item.short_url}
                      </a>{" "}
                      &nbsp; &nbsp;
                      <span
                        className="clipb"
                        onClick={() => handleCopyUrl(item.short_url)}
                      >
                        <FaClone />
                      </span>
                    </div>
                  </p>
                  <p>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.short_url}`}
                      alt="QR Code"
                    />
                  </p>
                  <p className="clicks">Clicks: {item.visit}</p>
                </div>

                <div className="trash-div">
                  <span
                    className="trash"
                    onClick={() => handleDeleteRecord(item.short_url)}
                  >
                    <FaTrashAlt />
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import "../css/shorten.css";
import api from "./refresh_t";

export default function ShortenUrl() {
  const [responseData, setResponseData] = useState({});
  const [urlLink, setUrlLink] = useState({ url: "" });
  const [message, setMessage] = useState("");
  const [flashMessage, setFlashMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUrlLink((prevUrlLink) => ({
      ...prevUrlLink,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await api.post(`${BASE_URL}/short-urls`, urlLink, config, {
        withCredentials: true
      });
      const responseData = response.data;
      setResponseData(responseData);
      console.log(responseData);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setFlashMessage(error.response.data.error);
      } else if (error.response && error.response.data && error.response.data.message) {
        setFlashMessage(error.response.data.message);
      } else {
        console.error("An error occurred:", error);
        setFlashMessage("An error occurred. Please try again.");
      }
    }

    if (message) {
      setFlashMessage(message);
    }

    setUrlLink({ url: "" });
  };

  return (
    <div className="shot">
      <h2>Shorten URL</h2>
      {message && <div className="messg">{message}</div>}
      {flashMessage && <div className="flash-message2">{flashMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL here"
          name="url"
          value={urlLink.url}
          onChange={handleChange}
        />
        <button type="submit">Shorten</button>
      </form>
      {Object.keys(responseData).length > 0 && (
        <>
          <div className="details">
            <p>Short URL: <br /> <span>
              <a href={responseData.short_url} target="_blank" rel="noreferrer">{responseData.short_url}
              </a></span></p>

            <p>Original URL: <br />
              <span>
                <a href={responseData.url} target="_blank" rel="noreferrer">{responseData.url}</a>
              </span>
            </p>
          </div>
        </>
      )}
      <div className="b2d-div">
        <Link to="/dashboard" className="b2d">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

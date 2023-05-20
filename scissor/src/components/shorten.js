import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import "../css/shorten.css";

export default function ShortenUrl() {
  const [responseData, setData] = useState([]);
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
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(`${BASE_URL}/short-urls`, urlLink, config);
      const responseData = response.data;
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error(error);
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
      {responseData.length > 0 && (
        <>
          <div className="details">
            <p>Short URL: {responseData.short_url}</p>
            <p>Original URL: {responseData.url}</p>
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

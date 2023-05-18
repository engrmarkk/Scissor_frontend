import React from "react";
import axios from "axios";


export const logout = () => {
    // const accessToken = localStorage.getItem("accessToken");
    // const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` };
  
    // axios.delete("http://localhost:5000/logout", {
    //     headers,
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     window.location.href = "/";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

      localStorage.removeItem("accessToken");
      window.location.href = "/";
        setTimeout(() => {
          window.location.reload();             
        }, 1000);
}

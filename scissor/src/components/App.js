import { useEffect, useState } from "react";
import "../css/App.css";
// importing components from react-router-dom package
import {
Route, Routes 
} from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Write from "./write";
import Register from "./register";
import UsersTable from "./users";
import Dashboard from "./dashboard";
import ShortenUrl from "./shorten";
import { AuthGuard } from "../authGuard/AuthGuard";


function App() {
  const Token = localStorage.getItem("accessToken");
  const [checkToken, setCheckToken] = useState(false);

  useEffect(() => {

      if(Token !== null){
        setCheckToken(true) ;
        console.log("Token is available")
      } else {
        setCheckToken(false) ;
        console.log("Token is null")
      }
    
  }, [Token])

 


  return (
      <div className="app-container">
        <Home isLoggedIn={checkToken}/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Write/>} />
          <Route path="/users" element={<AuthGuard><UsersTable/></AuthGuard>} />
          <Route path="/dashboard" element={<AuthGuard><Dashboard/></AuthGuard>} />
          <Route path="/shorten-url" element={<AuthGuard><ShortenUrl/></AuthGuard>} />
        </Routes>
      </div>
  );
}

export default App;

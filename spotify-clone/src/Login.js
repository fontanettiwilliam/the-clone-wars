import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
import Logo from "./asset/logo/spotify_white.png";

function Login() {
  return (
    <div className="login ">
      <img src={Logo} alt="Spotify Logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

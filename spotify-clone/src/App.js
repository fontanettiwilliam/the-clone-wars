import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const accessToken = hash.access_token;

    if (accessToken) {
      setToken(accessToken);

      spotify.setAccessToken(accessToken);

      spotify.getMe().then((user) => {
        console.log("User", user);
      });
    }

    console.log("The hash >> ", hash);
  }, []);
  return <div className="app">{token ? <h1>Logged</h1> : <Login />}</div>;
}

export default App;

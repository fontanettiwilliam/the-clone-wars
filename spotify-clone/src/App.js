import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const accessToken = hash.access_token;

    if (accessToken) {
      setToken(accessToken);

      spotify.setAccessToken(accessToken);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }

    console.log("The hash >> ", hash);
  }, [dispatch]);

  console.log("User", user);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;

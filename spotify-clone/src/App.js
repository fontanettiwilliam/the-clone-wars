import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import { useDataLayerValue } from "./DataLayer";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const accessToken = hash.access_token;

    if (accessToken) {
      dispatch({
        type: "SET_TOKEN",
        token: accessToken,
      });

      spotify.setAccessToken(accessToken);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcJjZM0ldXz2y").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists({ limit: 10, offset: 20 }).then((response) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        });
      });

      spotify.getMyTopTracks({ limit: 10, offset: 20 }).then((response) => {
        dispatch({
          type: "SET_TOP_TRACKS",
          top_tracks: response,
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

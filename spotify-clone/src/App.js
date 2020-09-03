/* eslint-disable react-hooks/exhaustive-deps */
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

  const configSpotify = async () => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const accessToken = hash.access_token;

    if (accessToken) {
      dispatch({
        type: "SET_TOKEN",
        token: accessToken,
      });
      spotify.setAccessToken(accessToken);

      const user = await spotify.getMe();
      dispatch({
        type: "SET_USER",
        user,
      });

      const playlists = await spotify.getUserPlaylists();
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });

      const discoverWeekly = await spotify.getPlaylist(
        "37i9dQZEVXcJjZM0ldXz2y"
      );
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: discoverWeekly,
      });

      const topArtists = await spotify.getMyTopArtists({
        limit: 10,
        offset: 20,
      });
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: topArtists,
      });

      const topTracks = await spotify.getMyTopTracks({ limit: 10, offset: 20 });
      dispatch({
        type: "SET_TOP_TRACKS",
        top_tracks: topTracks,
      });
    }
  };
  useEffect(() => {
    configSpotify();
  }, [dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import { useDataLayerValue } from "./providers/DataLayer";
import Routes from "./routes";
import { getTokenFromUrl } from "./services/spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [, dispatch] = useDataLayerValue();

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

      spotify
        .getMyCurrentPlaybackState()
        .then((response) => {
          dispatch({
            type: "SET_PLAYING",
            playing: response.is_playing,
          });

          dispatch({
            type: "SET_ITEM",
            item: response.item,
          });

          dispatch({
            type: "SET_DEVICE",
            device: response.device,
          });

          dispatch({
            type: "SET_REPEAT",
            repeat: response.repeat_state,
          });

          dispatch({
            type: "SET_SUFFLE",
            shuffle: response.shuffle_state,
          });
        })
        .catch((error) => {
          console.error("erro", error);
        });
    }
  };

  useEffect(() => {
    configSpotify();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes spotify={spotify} />
    </BrowserRouter>
  );
}

export default App;

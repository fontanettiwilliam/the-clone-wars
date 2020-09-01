/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Footer.css";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

function Footer({ spotify }) {
  const [{ token, item, playing, device }, dispatch] = useDataLayerValue();
  const [sliderValue, setSliderValue] = useState(
    device?.volume_percent ? device.volume_percent : 0
  );

  useEffect(() => {
    spotify
      .getMyCurrentPlaybackState()
      .then((response) => {
        console.log(response);
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

        setSliderValue(response.device.volume_percent);
      })
      .catch((error) => {
        console.error("erro", error);
      });
  }, [dispatch, spotify, token]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const handleChangeSlider = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleChangeSliderCommited = (event, newValue) => {
    spotify.setVolume(newValue);
  };

  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <img
            className="footer_albumCover"
            src={item?.album.images[0].url}
            alt={item?.name}
          />
          {item ? (
            <div className="footer_songInfo">
              <h4>{item.name}</h4>
              <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
            </div>
          ) : (
            <div className="footer_songInfo">
              <h4>No song is playing</h4>
              <p>...</p>
            </div>
          )}
        </div>
        <div className="footer_center">
          <ShuffleIcon className="footer_green" />
          <SkipPreviousIcon className="footer_icon" onClick={skipNext} />
          {playing ? (
            <PauseCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer__icon"
            />
          ) : (
            <PlayCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer__icon"
            />
          )}
          <SkipNextIcon className="footer_icon" onClick={skipPrevious} />
          <RepeatIcon className="footer_green" />
        </div>
        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              {sliderValue === 0 && <VolumeOffIcon />}
              {sliderValue > 0 && sliderValue <= 50 && <VolumeDownIcon />}
              {sliderValue > 50 && <VolumeUpIcon />}
            </Grid>
            <Grid item xs>
              <Slider
                aria-labelledby="continuous-slider"
                value={sliderValue ? sliderValue : 0}
                onChange={handleChangeSlider}
                onChangeCommitted={handleChangeSliderCommited}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Footer;

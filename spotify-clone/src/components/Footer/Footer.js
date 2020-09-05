/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Slider, Badge } from "@material-ui/core";
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
import { useDataLayerValue } from "../../providers/DataLayer";
import "./Footer.css";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

function Footer({ spotify }) {
  const [
    { token, item, playing, device, repeat, shuffle },
    dispatch,
  ] = useDataLayerValue();

  console.log(token);
  const [sliderValue, setSliderValue] = useState(
    device ? device.volume_percent : 0
  );

  useEffect(() => {
    spotify
      .getMyCurrentPlaybackState()
      .then((response) => {
        console.log("Response", response);
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

        setSliderValue(response.device ? response.device.volume_percent : 100);
      })
      .catch((error) => {
        console.error("erro", error);
      });
  }, [dispatch, spotify, token]);

  //#region [PLAY/PAUSE]
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
  //#endregion

  //#region [SHUFLE]
  const handleShuffle = () => {
    spotify.setShuffle(!shuffle);
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch({
        type: "SET_ITEM",
        item: response.item,
      });
      dispatch({
        type: "SET_SHUFFLE",
        shuffle: !shuffle,
      });
    });
  };
  //#endregion

  //#region [REPEAT]
  const nextRepeat = (current) => {
    switch (current) {
      case "off":
        return "context";
      case "context":
        return "track";
      case "track":
        return "off";
      default:
        return "off";
    }
  };

  const handleRepeat = () => {
    const nextState = nextRepeat(repeat);
    spotify.setRepeat(nextState);
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch({
        type: "SET_ITEM",
        item: response.item,
      });
      dispatch({
        type: "SET_REPEAT",
        repeat: nextState,
      });
    });
  };
  //#endregion

  //#region [SKIP]
  const handleSkipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch({
        type: "SET_ITEM",
        item: response.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const handleSkipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch({
        type: "SET_ITEM",
        item: response.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };
  //#endregion

  //#region [SLIDER]
  const handleChangeSlider = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleChangeSliderCommited = (event, newValue) => {
    spotify.setVolume(newValue);
  };
  //#endregion

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
          <ShuffleIcon
            className={!shuffle ? "footer_icon" : "footer_green"}
            onClick={handleShuffle}
          />
          <SkipPreviousIcon
            className="footer_icon"
            onClick={handleSkipPrevious}
          />
          {playing ? (
            <PauseCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer_icon"
            />
          ) : (
            <PlayCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer_icon"
            />
          )}
          <SkipNextIcon className="footer_icon" onClick={handleSkipNext} />
          <Badge
            badgeContent={repeat === "track" ? 1 : 0}
            className={repeat === "off" ? "footer_icon" : "footer_green"}
          >
            <RepeatIcon onClick={handleRepeat} />
          </Badge>
        </div>
        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon className="footer_icon" />
            </Grid>
            <Grid item>
              {sliderValue === 0 && <VolumeOffIcon className="footer_icon" />}
              {sliderValue > 0 && sliderValue <= 50 && (
                <VolumeDownIcon className="footer_icon" />
              )}
              {sliderValue > 50 && <VolumeUpIcon className="footer_icon" />}
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

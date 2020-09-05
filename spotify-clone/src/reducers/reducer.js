export const initialState = {
  user: null,
  // token: null,
  token:
    "BQA6FXmdSv7wNzvK9OnCmFuQBhS1xa4nl7fI2UvLV_ItwCwTfZjb1BVyHqH5gQ3oOe2lt52GMuV1yusbL4k45IiNuRhz5m-_JxSX16LOWo0n7OD1vwuPqBt1t9AEKSAMjxOYMYxP5dh8iicTNM2Ums-cfckHR9EUk_30dliFz7TEUu4VSdENkUkMVE6tptpycLm0rxMDO_YI-P3Vf498kBdPPbep51YN_MFNKnOEROguyYwvnbv1o9EVA2SfHWB_kzlTA5CXI_YjED_xI0reVIntZjv6",
  playlists: [],
  playing: false,
  item: null,
  device: null,
  discover_weekly: null,
  top_artists: null,
  top_tracks: null,
  repeat: "off",
  shuffle: false,
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_DEVICE":
      return {
        ...state,
        device: action.device,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_TOP_TRACKS":
      return {
        ...state,
        top_tracks: action.top_tracks,
      };
    case "SET_REPEAT":
      return {
        ...state,
        repeat: action.repeat,
      };
    case "SET_SHUFFLE":
      return {
        ...state,
        shuffle: action.shuffle,
      };

    default:
      return state;
  }
};

export default reducer;

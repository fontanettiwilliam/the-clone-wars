export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDb56_DZOKY00DXr9joVZZ7tkSJAH7ps3-pc2b4kOxPiNM74V7aBTPbLYYwmZiV8Qmgrb-2zcoxBsto8NoTcF2Udo53e2gETsb4Q2EwXUUcEzgNLb4ZGCKiMv0gZJCO3pt6AvX66XD7OYCOnH7Ngg",
  // token:null,
};

const reducer = (state, action) => {
  console.log(action);

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
    default:
      return state;
  }
};

export default reducer;

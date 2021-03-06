export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/home";

const clientId = "7f72e0bfdc5a4224aa1c688c1bc3bed9";

const scopes = [
  "app-remote-control",
  "streaming",
  "user-read-email",
  "user-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-follow-modify",
  "user-follow-read",
  "user-library-modify",
  "user-library-read",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-read-playback-state",
  "user-read-recently-played",
  "user-top-read",
];

const formattedScopes = scopes.join("%20");

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${formattedScopes}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

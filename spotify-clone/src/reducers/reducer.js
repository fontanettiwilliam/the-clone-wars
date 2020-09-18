//#region [MOCK]
const top_artists = {
  items: [
    {
      id: "36QJpDe2go2KgaRleHCDTp",
      name: "Led Zeppelin",
      type: "artist",
      images: [
        {
          height: 600,
          url:
            "https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e",
          width: 600,
        },
        {
          height: 200,
          url:
            "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
          width: 200,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/16eb3cdae0d824b520ac17710e943a99d3ef6602",
          width: 64,
        },
      ],
    },
  ],
};

const top_tracks = {
  items: [
    {
      id: "3YzycAZQJ7GXrS9SUySjwp",
      name: "Pampam",
      artists: [
        {
          href: "https://api.spotify.com/v1/artists/1FGLT6mEhIrPhgqYiU57ro",
          id: "1FGLT6mEhIrPhgqYiU57ro",
          name: "VINNE",
          type: "artist",
        },
      ],
      type: "track",
      album: {
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/ab67616d0000b273264fdb667588818e14b8a0d5",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/ab67616d00001e02264fdb667588818e14b8a0d5",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/ab67616d00004851264fdb667588818e14b8a0d5",
            width: 64,
          },
        ],
      },
    },
  ],
};

const token =
  "BQA6FXmdSv7wNzvK9OnCmFuQBhS1xa4nl7fI2UvLV_ItwCwTfZjb1BVyHqH5gQ3oOe2lt52GMuV1yusbL4k45IiNuRhz5m-_JxSX16LOWo0n7OD1vwuPqBt1t9AEKSAMjxOYMYxP5dh8iicTNM2Ums-cfckHR9EUk_30dliFz7TEUu4VSdENkUkMVE6tptpycLm0rxMDO_YI-P3Vf498kBdPPbep51YN_MFNKnOEROguyYwvnbv1o9EVA2SfHWB_kzlTA5CXI_YjED_xI0reVIntZjv6";

const user = {
  country: "BR",
  display_name: "William Fontanetti",
  email: "williampriester@gmail.com",
  id: "williampriester",
  images: [
    {
      height: null,
      url:
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p320…6&oh=39357491455750e9b5b9f0998f940566&oe=5F8BDFF9",
      width: null,
    },
  ],
};

const playlists = {
  items: [
    {
      id: "37i9dQZEVXcJjZM0ldXz2y",
      description:
        "Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.",
      images: [
        {
          height: null,
          url:
            "https://newjams-images.scdn.co/v2/discover-weekly/…wvBayEZrlYAHwA==/MjU6NjE6MTBUMjAtMDEtMA==/default",
          width: null,
        },
      ],
      name: "Descobertas da Semana",
      type: "playlist",
    },
    {
      id: "48tRzV0EZMG7D94urK350X",
      description: "Tuts tus puts puts tei tei",
      images: [
        {
          height: null,
          url:
            "https://i.scdn.co/image/ab67706c0000bebbb1b4964557d72e0520ebcc7d",
          width: null,
        },
      ],
      name: "Moment for Cell",
      type: "playlist",
    },
  ],
};
//#endregion

const DEV_MODE = false;

export const initialState = {
  user: DEV_MODE ? user : null,
  token: DEV_MODE ? token : null,
  playlists: DEV_MODE ? playlists : [],
  playing: false,
  item: null,
  device: null,
  discover_weekly: null,
  top_artists: DEV_MODE ? top_artists : null,
  top_tracks: DEV_MODE ? top_tracks : null,
  repeat: "off",
  shuffle: false,
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

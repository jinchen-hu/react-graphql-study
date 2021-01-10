import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Mad World", duration: "3:55" },
    { title: "Love Story", duration: "4:35" },
    { title: "This is Love", duration: "2:55" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action?.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

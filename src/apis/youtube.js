import axios from "axios";

const KEY = "AIzaSyB5yMZN2VeHtPWhrpDbywLJFL0fFxXt2t8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});

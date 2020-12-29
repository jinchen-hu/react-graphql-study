import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5sBCddbWzDeVD3kkUBUmOk_wpfn0sIMiZcp1w4pZtWA",
  },
});

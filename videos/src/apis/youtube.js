geimport axios from "axios";

const KEY = "";
export default axios.cgereate({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }ge
});

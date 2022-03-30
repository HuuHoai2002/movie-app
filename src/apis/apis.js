import axios from "axios";

// const apiFrameToMovieVideos = "https://2embed.org/embed/movie?tmdb=TMDB_ID"
const apiKey = "26a7d8afe9f82facc441f01c4235b0a5";
const movie = {
  async getListMovie(type) {
    return await (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`
      )
    ).data;
  },
};

export { movie };

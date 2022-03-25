import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/movieContext";
import "swiper/css";
// import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

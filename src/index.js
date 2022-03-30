import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/movieContext";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Loading from "./components/loading/Loading";
SwiperCore.use([Autoplay]);

const LoadAPP = React.lazy(() => {
  return import("./App");
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <Suspense fallback={<Loading></Loading>}>
          <LoadAPP></LoadAPP>
        </Suspense>
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { useState, useEffect, Fragment } from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import { useMovies } from "../../contexts/movieContext";
import MoviePageLoading from "../loading/MoviePageLoading";
import TiviSeriesItem from "./TiviSeriesItem";

//https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=26a7d8afe9f82facc441f01c4235b0a5&language=en-US&page=1
const itemsPerPage = 20;
const TiviPagination = ({ movieID, info = "" }) => {
  const [nextPage, setNextPage] = useState(1);
  const { apiKey, fetcher } = useMovies();

  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/tv
    /${movieID}/${info}?api_key=${apiKey}&page=${nextPage}`
  );
  // console.log(similar ? "Similar Id " + movieID : "");
  useEffect(() => {
    setUrl(
      `https://api.themoviedb.org/3/tv/${movieID}/${info}?api_key=${apiKey}&page=${nextPage}`
    );
  }, [nextPage, apiKey, movieID, info]);

  //Detructoring dữ liệu trả về
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const loading = !data && !error;
  //Pagination
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <Fragment>
      <div className="grid grid-cols-4 gap-5">
        {loading ? (
          <MoviePageLoading></MoviePageLoading>
        ) : (
          movies.length > 0 &&
          movies.map((item) => (
            <TiviSeriesItem
              data={item}
              key={item.id}
              imgClassName={"!h-[200px]"}
              className={"!mx-0"}></TiviSeriesItem>
          ))
        )}
      </div>
      <div className="mt-5 mb-2">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </Fragment>
  );
};

export default React.memo(TiviPagination);

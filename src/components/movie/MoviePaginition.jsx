import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import { useMovies } from "../../contexts/movieContext";
import MovieItem from "./MovieItem";

const itemsPerPage = 20;
const MoviePaginition = () => {
  const [nextPage, setNextPage] = useState(1);
  const { apiKey, fetcher } = useMovies();

  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/upcoming/?api_key=${apiKey}&page=${nextPage}`
  );

  useEffect(() => {
    setUrl(
      `https://api.themoviedb.org/3/movie/upcoming/?api_key=${apiKey}&page=${nextPage}`
    );
  }, [nextPage, apiKey]);

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
    <div>
      <div className="grid grid-cols-4 gap-5">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieItem
              data={item}
              key={item.id}
              imgClassName={"!h-[200px]"}
              className={"!mx-0"}></MovieItem>
          ))}
      </div>
      {loading && (
        <div className="w-5 h-5 flex items-center justify-center border-2 rounded-full border-primary border-t-transparent transition-all animate-spin"></div>
      )}
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
    </div>
  );
};

export default React.memo(MoviePaginition);

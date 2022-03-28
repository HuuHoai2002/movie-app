import React, { useEffect, useState } from "react";
import useSWR from "swr";
import TiviSeriesItem from "../../components/movie/TiviSeriesItem";
import { useMovies } from "../../contexts/movieContext";
import { debounce } from "lodash";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const TiviSiriesPage = () => {
  const [values, setValues] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const { apiKey, fetcher, inputRef } = useMovies();
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/tv/top_rated/?api_key=${apiKey}&page=${nextPage}`
  );
  const { searchTvSeriesPath } = useMovies();
  // Get value input
  const handleSetValues = debounce((e) => {
    setValues(e.target.value);
  }, 500);

  useEffect(() => {
    inputRef.current.focus();
    if (values) {
      setUrl(`${searchTvSeriesPath}${values}&${nextPage}`);
    } else {
      setUrl(
        `https://api.themoviedb.org/3/tv/top_rated/?api_key=${apiKey}&page=${nextPage}`
      );
    }
  }, [values, nextPage, searchTvSeriesPath, apiKey]);

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
    <div className="page-container-movie">
      <div className="flex items-center justify-between mb-5 gap-2">
        <input
          type="text"
          className="p-3 rounded-lg bg-secondary w-full outline-none"
          placeholder="What TV series are you looking for?"
          onChange={handleSetValues}
          ref={inputRef}
        />
        <button className="py-3 px-4 rounded-lg bg-primary font-semibold flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
      </div>
      {loading && (
        <div className="w-5 h-5 flex items-center justify-center border-2 rounded-full border-primary border-t-transparent transition-all animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-5">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <TiviSeriesItem
              data={item}
              key={item.id}
              imgClassName={"!h-[200px]"}
              className={"!mx-0"}></TiviSeriesItem>
          ))}
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
    </div>
  );
};

export default TiviSiriesPage;

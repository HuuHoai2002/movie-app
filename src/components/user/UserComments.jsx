import React from "react";
import { useMovies } from "../../contexts/movieContext";

const UserComments = ({ data }) => {
  // Check xem có phải url hoàn chỉnh hay không
  const checkUrl = (url) => {
    return url.includes("https://" || "http://" || "www://");
  };
  // Vì url có / ở đầu lên chỉ lấy từ phần tử thứ hai trở đi
  const cutUrl = (url) => {
    return url.slice(1, url.length);
  };

  const { author_details, content } = data;
  const { imagesPath } = useMovies();

  return (
    <div className="flex items-center gap-x-5 mb-3">
      <div className="w-11 h-11 p-[2px] border border-primary rounded-full">
        <img
          src={`${
            author_details.avatar_path === null
              ? "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=MJ4UyDqikisAX9jA2vV&_nc_ht=scontent.fhan3-2.fna&oh=00_AT9KhGUAUNhYUEPv2jbITGTQzUH4Y5fquxLQAISRIONMUQ&oe=6263A2F8"
              : checkUrl(author_details.avatar_path)
              ? cutUrl(author_details.avatar_path)
              : imagesPath + author_details.avatar_path
          }`}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="max-w-[800px] text-sm border border-[#24252A] px-2 py-1 rounded-2xl opacity-80 user-comments">
        <h2 className="text-primary font-medium text-base mb-1">
          {author_details.username}
        </h2>
        {content}
      </div>
    </div>
  );
};

export default UserComments;

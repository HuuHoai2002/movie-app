import React from "react";

const User = ({ username, email, userImage }) => {
  return (
    <div className="page-container-review w-full fixed top-0 right-0 z-10 p-5 border-l border-[#24252A] h-full cursor-pointer">
      {/* <h1 className="font-semibold text-base mb-5">Hi</h1> */}
      <div className="flex items-center gap-x-2">
        <div className="w-11 h-11 p-[2px] border border-primary rounded-full">
          <img
            src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=MJ4UyDqikisAX9jA2vV&_nc_ht=scontent.fhan3-2.fna&oh=00_AT9KhGUAUNhYUEPv2jbITGTQzUH4Y5fquxLQAISRIONMUQ&oe=6263A2F8"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-base font-semibold">Nghiêm Hữu Hoài</h2>
          <span className="text-xs text-textcolor">Huuhoai051@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default User;

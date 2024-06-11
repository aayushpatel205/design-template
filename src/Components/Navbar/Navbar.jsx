import React, { useContext } from "react";
import { useDataContext } from "../../Context/DataContext";
import { getSearchPosts, getAllPosts } from "../../Service/api";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "sonner";

const Navbar = () => {
  const { search, setSearch, data, setData } = useDataContext();
  return (
    <div className="bg-darkGray p-2 flex flex-col gap-2 items-center sticky top-0 z-20">
      <div className="p-1 flex justify-center w-full">
        <form
          className="p-1 flex justify-center w-full items-center gap-2"
          onSubmit={async (e) => {
            e.preventDefault();
            if (search.trim()) {
              const response = await getSearchPosts(search);
              setData(response?.data.articles);
              toast.success("News Loaded!");
            } else {
              toast.error("Please Enter a value");
            }
          }}
        >
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            type="text"
            placeholder="Search..."
            className="bg-transparent border-2 rounded-2xl px-3 outline-none w-1/3  placeholder:text-white text-sm py-1 border-white text-white font-medium placeholder:font-medium max-[500px]:w-3/4"
          />
          {search && (
            <span
              onClick={async () => {
                setSearch("");
                const response = await getAllPosts();
                setData(response?.data.articles);
              }}
              className="text-white"
            >
              <MdOutlineCancel size={22} />
            </span>
          )}
        </form>
      </div>
      <div className="text-white text-3xl p-2">
        <h1>News App.</h1>
      </div>
    </div>
  );
};

export default Navbar;

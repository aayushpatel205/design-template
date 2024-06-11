import React from "react";
import noImage from "../../assets/no-image-available.jpg";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/DataContext";

const Card = ({ data }) => {
  const { setOneData } = useDataContext();
  // Parse the ISO date string
  const parsedDate = parseISO(data.publishedAt);
  // Format the date to "dd MMM"
  const formattedDate = format(parsedDate, "dd MMM");
  return data.content ? (
    <div className="h-[410px] w-[280px] bg-white flex flex-col shadow-md relative hover:scale-105 transition-all">
      <p className="text-slate-900 bg-white rounded-md py-1 px-2 absolute top-2 left-2 z-10 text-sm shadow-md">
        {formattedDate}
      </p>
      <div className="h-[200px] relative">
        <img
          src={data.urlToImage ? data.urlToImage : noImage}
          className="object-fill h-full w-full"
        />
        <h4 className="text-white w-full py-2 pl-4 bg-black bg-opacity-30 absolute bottom-0 backdrop-filter backdrop-blur-sm text-lg">
          <span className="line-clamp-1">{data.title}</span>
        </h4>
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-sm px-4 py-2 text-slate-900 flex gap-1">
          <span className="font-semibold">Author:</span>
          <span className="line-clamp-1">
            {data.author ? data.author : "Unknown"}
          </span>
        </span>
        <div className="px-4 py-1">
          <p className="line-clamp-5 text-sm text-left break-all text-slate-900">
            {data.content}
          </p>
        </div>
      </div>
      <span className="px-3 py-1 rounded-md shadow-md bg-darkGray text-white text-sm self-center m-4 hover:opacity-80 transition-all cursor-pointer">
        <Link onClick={() => setOneData(data)} to={data.title}>
          View More
        </Link>
      </span>
    </div>
  ) : (
    <></>
  );
};

export default Card;

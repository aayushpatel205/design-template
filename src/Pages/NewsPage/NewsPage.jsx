import React, { useEffect, useState } from "react";
import { useDataContext } from "../../Context/DataContext";
import noImage from "../../assets/no-image-available.jpg";
import Loader from "../../Components/Loader/Loader";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { Toaster, toast } from "sonner";

const NewsPage = () => {
  const { oneData } = useDataContext();
  const parsedDate = parseISO(oneData?.publishedAt);
  const formattedDate = format(parsedDate, "dd MMM yyyy");
  const navigate = useNavigate();
  useEffect(() => {
    toast.info("Description of news available!");
  }, []);
  return (
    <>
      <div className="bg-beige h-dvh flex justify-center items-center overflow-y-auto">
        <div className="w-3/5 bg-white p-5 shadow-md flex flex-col max-[500px]:w-11/12">
          <img
            src={oneData?.urlToImage ? oneData?.urlToImage : noImage}
            className="w-full h-72 object-scale-down p-2"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-slate-900 font-medium py-2">
              {oneData?.title}
            </h1>
            <div className="flex justify-between items-center">
              <span>Date: {formattedDate ? formattedDate : "NA"}</span>
              <span>
                Author: {oneData?.author ? oneData?.author : "unknown"}
              </span>
            </div>
            <p className="text-justify">{oneData?.description}</p>
          </div>
        </div>
      </div>
      <Loader show={!oneData} />
      <span
        className="absolute z-10 top-5 left-5 flex items-center gap-1 font-medium text-slate-900 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <LiaLongArrowAltLeftSolid size={30} />
        Back
      </span>
      <Toaster richColors position="top-right" />
    </>
  );
};

export default NewsPage;

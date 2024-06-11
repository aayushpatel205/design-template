import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { getAllPosts } from "../../Service/api";
import Card from "../../Components/Card/Card";
import { useDataContext } from "../../Context/DataContext";
import Loader from "../../Components/Loader/Loader";
import { Toaster, toast } from "sonner";

const Home = () => {
  const { data, setData } = useDataContext();
  useEffect(() => {
    const getData = async () => {
      const res = await getAllPosts();
      setData(res?.data.articles);
      toast.success("All News Loaded!");
    };
    getData();
  }, []);
  return (
    <div className="max-h-dvh overflow-auto bg-beige">
      <Navbar />
      <div className="p-4 grid grid-cols-4 max-[500px]:grid-cols-1 max-[750px]:grid-cols-2 max-[1000px]:grid-cols-3 max-[1300px]:grid-cols-4 justify-items-center gap-y-5 bo">
        <>
          {data?.map((element, index) => {
            return <Card data={element} key={index} />;
          })}
          <Loader show={!data} />
        </>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
};

export default Home;

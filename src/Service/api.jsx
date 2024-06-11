import axios from "axios";
import { useDataContext } from "../Context/DataContext";

const apiKey = "f99eb2a2d0434783a63355a20441d3e1";
const today = new Date().toISOString().split("T")[0];
const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];
const URL = "https://newsapi.org/v2/";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(
      `${URL}everything?q=india&from=${lastWeek}&to=${today}&language=en&sortBy=publishedAt&apiKey=${apiKey}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchPosts = async (search) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=f99eb2a2d0434783a63355a20441d3e1`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

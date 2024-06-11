import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const today = new Date().toISOString().split("T")[0];
const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];
const URL = import.meta.env.VITE_URL;

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
      `${URL}everything?q=${search}&apiKey=${apiKey}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

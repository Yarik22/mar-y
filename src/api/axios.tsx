import axios from "axios";
import ApodResponse from "./interfaces/APOD";
import Photo from "./interfaces/AstroPhotos";

const api = axios.create({
  baseURL: "https://api.nasa.gov",
  timeout: 5000,
});

export const fetchAPOD = async (): Promise<ApodResponse> => {
  try {
    const response = await api.get(
      `/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

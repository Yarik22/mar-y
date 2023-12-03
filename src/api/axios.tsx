import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nasa.gov",
  timeout: 5000,
});

export interface ApodResponse {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

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

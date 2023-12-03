import { create } from "zustand";
import Photo from "../../api/interfaces/AstroPhotos";
import axios from "axios";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed, so add 1
const day = currentDate.getDate().toString().padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

type AstroPhotosSlice = {
  photos: Photo[];
  formattedDate: string;
  fetchPhotos: (date: string) => Promise<void>;
  setFormattedDate: (date: string) => void;
};
const useAstroPhotosSlice = create<AstroPhotosSlice>((set) => ({
  formattedDate,
  setFormattedDate: (date: string) => {
    set({ formattedDate: date });
  },
  photos: [],
  fetchPhotos: async (date: string) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const photos: Photo[] = response.data.photos;
      set({ photos });
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  },
}));
export default useAstroPhotosSlice;

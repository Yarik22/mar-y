import { create } from "zustand";
import UserPhoto from "../../api/interfaces/UserPhotos";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import Photo from "../../api/interfaces/AstroPhotos";
type UserPhotosSlice = {
  photos: UserPhoto[];
  addPhoto: (photo: Photo) => void;
  fetchPhotos: () => Promise<void>;
};

const photosCollectionRef = collection(db, "photos");

const useUserPhotosSlice = create<UserPhotosSlice>((set) => ({
  photos: [],
  addPhoto: async (photo: Photo) => {
    if (auth.currentUser?.uid != undefined) {
      const newPhoto: UserPhoto = {
        id: photo.id,
        earth_date: photo.earth_date,
        img_src: photo.img_src,
        landing_date: photo.rover.landing_date,
        launch_date: photo.rover.launch_date,
        rover_status: photo.rover.status,
        rover_name: photo.rover.name,
        user_id: auth.currentUser?.uid,
      };
      set((state) => ({ photos: [...state.photos, newPhoto] }));
    }
  },
  fetchPhotos: async () => {
    try {
      const data = await getDocs(photosCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...(doc.data() as UserPhoto),
      }));
      console.log(filteredData);
      set({ photos: filteredData });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useUserPhotosSlice;

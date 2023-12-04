import { create } from "zustand";
import UserPhoto from "../../api/interfaces/UserPhotos";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import Photo from "../../api/interfaces/AstroPhotos";
type UserPhotosSlice = {
  photos: UserPhoto[];
  addPhoto: (photo: Photo) => void;
  fetchPhotos: (userId: string) => Promise<void>;
  deletePhoto: (id: number, user_id: string) => Promise<void>;
};
const photosCollectionRef = collection(db, "photos");

const useUserPhotosSlice = create<UserPhotosSlice>((set) => ({
  photos: [],
  deletePhoto: async (id: number, user_id: string) => {
    try {
      const q = query(
        photosCollectionRef,
        where("id", "==", id),
        where("user_id", "==", user_id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "photos", document.id));
      });
      set((state) => ({
        photos: state.photos.filter((photo) => photo.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },
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
      await addDoc(photosCollectionRef, newPhoto);
    }
  },
  fetchPhotos: async (userId: string) => {
    try {
      const q = query(photosCollectionRef, where("user_id", "==", userId));
      const querySnapshot = await getDocs(q);
      const filteredData = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as UserPhoto),
      }));
      set({ photos: filteredData });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useUserPhotosSlice;

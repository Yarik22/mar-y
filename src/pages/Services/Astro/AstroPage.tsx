import styles from "./astroPage.module.scss";
import { auth, db } from "../../../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import useUserPhotosSlice from "../../../data/photos/UserPhotosSlice";
import { Button } from "@mui/material";

const photosCollectionRef = collection(db, "photos");

export default function AstroPage() {
  const state = useUserPhotosSlice();
  useEffect(() => {
    const ftchD = async () => {
      await state.fetchPhotos();
      console.log(state.photos);
      console.log(state.photos[0].user_id);
    };
    ftchD();
  }, []);
  return <div className={styles.container}>Astro</div>;
}

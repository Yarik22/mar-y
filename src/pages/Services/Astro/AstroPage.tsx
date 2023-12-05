import styles from "./astroPage.module.scss";
import { auth } from "../../../config/firebase";
import { useEffect, useState } from "react";
import useUserPhotosSlice from "../../../data/photos/UserPhotosSlice";
import { Button, Pagination, Skeleton } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const itemsPerPage = 3;

export default function AstroPage() {
  const { photos, fetchPhotos, deletePhoto } = useUserPhotosSlice();
  useEffect(() => {
    if (auth.currentUser != null) {
      fetchPhotos(auth.currentUser?.uid);
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(true);
  const [date, setDate] = useState<string | undefined | null>(null);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPhotos = photos.slice(startIndex, endIndex);

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    if (currentPage != newPage) {
      setImageLoaded(false);
      setCurrentPage(newPage);
    }
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const deletePhotoFromData = async (id: number) => {
    if (auth.currentUser != null) {
      deletePhoto(id, auth.currentUser.uid);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["MobileDatePicker"]}>
            <DemoItem>
              <MobileDatePicker
                value={dayjs(date)}
                defaultValue={dayjs(new Date())}
                maxDate={dayjs(new Date())}
                onAccept={(date: Dayjs | null) => {
                  setDate(date?.format("YYYY-MM-DD"));
                  setShowAll(false);
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        <Button
          style={{ boxShadow: "0 0 30px black", background: "rgba(0,0,0,0.6)" }}
          variant="outlined"
          color="success"
          onClick={() => {
            setShowAll(true);
            setDate(null);
          }}
          fullWidth
        >
          Unset date
        </Button>
      </div>
      <div className={styles.photos}>
        {displayedPhotos.length === 0 && (
          <div style={{ fontSize: "10vw" }}>No photos</div>
        )}
        {displayedPhotos
          .filter((photo) => photo.earth_date === date || showAll)
          .map((photo) => (
            <div key={photo.id} className={styles.photo}>
              <p>Earth Date: {photo.earth_date}</p>
              <p>
                Rover Name: {photo.rover_name} ({photo.rover_status})
              </p>
              {!imageLoaded && (
                <Skeleton
                  variant="rectangular"
                  width={"calc(20vw + 15vh)"}
                  height={"40vh"}
                  sx={{ bgcolor: "grey.900" }}
                />
              )}
              <img
                src={photo.img_src}
                alt={`Photo ID: ${photo.id}`}
                onLoad={handleImageLoad}
                style={{ display: imageLoaded ? "block" : "none" }}
              />
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={() => deletePhotoFromData(photo.id)}
              >
                Delete
              </Button>
            </div>
          ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={Math.ceil(
            photos.filter((photo) => photo.earth_date === date || showAll)
              .length / itemsPerPage
          )}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}

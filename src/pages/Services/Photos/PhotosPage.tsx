import React, { useEffect, useState } from "react";
import useAstroPhotosSlice from "../../../data/photos/AstroPhotosSlice";
import { Button, Pagination, Skeleton } from "@mui/material";
import styles from "./photosPage.module.scss";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

const itemsPerPage = 3;

const PhotoGallery: React.FC = () => {
  const { photos, fetchPhotos, formattedDate, setFormattedDate } =
    useAstroPhotosSlice();
  const [currentPage, setCurrentPage] = useState(1);
  const [date, setDate] = useState<string | undefined>(formattedDate);

  useEffect(() => {
    if (date) {
      fetchPhotos(date);
      setFormattedDate(date);
    }
  }, [date]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPhotos = photos.slice(startIndex, endIndex);

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setImageLoaded(false);
    setCurrentPage(newPage);
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const today = dayjs();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["MobileDatePicker"]}>
            <DemoItem>
              <MobileDatePicker
                defaultValue={dayjs(formattedDate)}
                maxDate={today}
                onAccept={(date: Dayjs | null) => {
                  setDate(date?.format("YYYY-MM-DD"));
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className={styles.photos}>
        {displayedPhotos.length === 0 && (
          <div style={{ fontSize: "10vw" }}>No photos</div>
        )}
        {displayedPhotos.map((photo) => (
          <div key={photo.id} className={styles.photo}>
            <p>Earth Date: {photo.earth_date}</p>
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
            <Button variant="contained" color="success" fullWidth>
              Success
            </Button>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={Math.ceil(photos.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
};
export default PhotoGallery;

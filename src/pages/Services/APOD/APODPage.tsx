import { useEffect, useState } from "react";
import { ApodResponse, fetchAPOD } from "../../../api/axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./apod.module.scss";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function APODPage() {
  const [data, setData] = useLocalStorage<ApodResponse | null>(null, "apod");

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed, so add 1
  const day = currentDate.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const handleAlert = () => {
    window.alert(data?.explanation);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAPOD();
      setData(response);
      console.log(response.url);
    };

    const storedDataString = localStorage.getItem("apod");
    const storedData: ApodResponse | null = storedDataString
      ? JSON.parse(storedDataString)
      : null;
    if (formattedDate != storedData?.date) {
      fetchData();
    }
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.container} style={{ position: "absolute", top:"20vh" }}>
      <Paper elevation={3}>
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"40vh"}
            sx={{ bgcolor: "grey.900" }}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        )}
        <img
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoad}
          src={data?.hdurl || data?.url}
          alt={data?.title}
        />
      </Paper>
      <div>
        <Accordion
          style={{
            position: "absolute",
            top: "-20px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <AccordionSummary
            onClick={window.innerWidth < 1200 ? handleAlert : () => {}}
            expandIcon={window.innerWidth > 1200 ? <ExpandMoreIcon /> : null}
          >
            <Typography
              style={{ fontSize: "18px", fontWeight: "bold" }}
              variant="h6"
            >
              <a
                style={{ color: "black", textDecoration: "underline" }}
                href={data?.url}
              >
                {" "}
                {data?.title}
              </a>
            </Typography>
          </AccordionSummary>
          {window.innerWidth < 1200 ? null : (
            <AccordionDetails>
              <Typography variant="body1" style={{ marginTop: "16px" }}>
                {data?.explanation}
              </Typography>
            </AccordionDetails>
          )}
        </Accordion>
      </div>
    </div>
  );
}

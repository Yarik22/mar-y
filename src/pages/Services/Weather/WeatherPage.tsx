import { Skeleton } from "@mui/material";
import { useState } from "react";
import styles from "./WeatherPage.module.scss";

export default function WeatherPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div className={styles.container}>
        {!isLoaded && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ bgcolor: "grey.900" }}
          />
        )}
        <iframe
          src="https://mars.nasa.gov/layout/embed/image/mslweather/"
          width="100%"
          height="100%"
          frameBorder={0}
          scrolling="yes"
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
    </>
  );
}

import { Skeleton } from "@mui/material";
import { useState } from "react";
import styles from "./surfacePage.module.scss";

export default function SurfacePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div className={styles.container} style={{height:"89vh"}}>
        {!isLoaded && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ bgcolor: "grey.900" }}
          />
        )}
        <iframe
          src="https://mars.nasa.gov/maps/location/?mission=MSL&site=NOW&mapLon=137.40068435668948&mapLat=-4.7733283835506075&mapZoom=15&globeLon=137.3978687&globeLat=-4.663687049999997&globeZoom=13&globeCamera=0,-2441.40625,0,0,1,0&panePercents=0,100,0&on=Current Position$1.00,Waypoints$1.00,Surface View$1.00,Rover Path$1.00,Labels$1.00,Basemap$1.00,Gale Crater Map$1.00"
          width="100%"
          height="100%"
          frameBorder={0}
          scrolling="yes"
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? "block" : "none" }}
          allowFullScreen
        />
      </div>
    </>
  );
}

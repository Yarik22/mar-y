import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "./servicesPage.module.scss";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { useState } from "react";

const services = [
  {
    url: "https://www.codingonmars.com/images/weather_mars.jpg",
    name: "Weather",
    page: "weather",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzdIZuO-DhB3emhcOCb7RBT8FPq-Kza-fpA&usqp=CAU",
    name: "APOD",
    page: "weather",
  },
  {
    url: "https://i0.wp.com/eos.org/wp-content/uploads/2016/05/artist-concept-mars-rover-writes-with-wheels.jpg?fit=820%2C615&ssl=1",
    name: "Rover",
    page: "weather",
  },
  {
    url: "https://www.popsci.com/uploads/2023/05/19/MarsPinestand.png?auto=webp&width=1440&height=810",
    name: "Photos",
    page: "weather",
  },
  {
    url: "https://www.universetoday.com/wp-content/uploads/2008/06/Mars_atmosphere-1.jpg",
    name: "Surface",
    page: "weather",
  },
  {
    url: "https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg",
    name: "Learn",
    page: "weather",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 200,
          },
        }}
      >
        {services.map((serv, idx) => (
          <Paper
            key={idx}
            elevation={5}
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${serv.url})`,
              backgroundPosition: "center",
              fontSize: 30,
              transition: "all 0.3s",
            }}
            className={styles.paper}
          >
            <div
              className={styles.item}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
              onClick={() => {
                navigate(`${serv.page}`);
              }}
            >
              {serv.name}
            </div>
          </Paper>
        ))}
      </Box>
    </div>
  );
}

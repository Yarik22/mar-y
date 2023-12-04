import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "./servicesPage.module.scss";
import { useNavigate } from "react-router-dom";

const services = [
  {
    url: "https://www.histerius.com/hs0817/cloudy_mars_2.jpg",
    name: "Weather",
    page: "weather",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzdIZuO-DhB3emhcOCb7RBT8FPq-Kza-fpA&usqp=CAU",
    name: "APOD",
    page: "apod",
  },
  {
    url: "https://i0.wp.com/eos.org/wp-content/uploads/2016/05/artist-concept-mars-rover-writes-with-wheels.jpg?fit=820%2C615&ssl=1",
    name: "Rover",
    page: "rover",
  },
  {
    url: "https://www.popsci.com/uploads/2023/05/19/MarsPinestand.png?auto=webp&width=1440&height=810",
    name: "Photos",
    page: "photos",
  },
  {
    url: "https://www.universetoday.com/wp-content/uploads/2008/06/Mars_atmosphere-1.jpg",
    name: "Surface",
    page: "surface",
  },
  {
    url: "https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg",
    name: "Astro",
    page: "astro",
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
              borderRadius:"20px",
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

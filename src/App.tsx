import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/Main/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import WeatherPage from "./pages/Services/Weather/WeatherPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import RoverPage from "./pages/Services/Rover/RoverPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/weather" element={<WeatherPage />} />
        <Route path="/services/apod" element={<WeatherPage />} />
        <Route path="/services/rover" element={<RoverPage />} />
        <Route path="/services/photos" element={<WeatherPage />} />
        <Route path="/services/surface" element={<WeatherPage />} />
        <Route path="/services/astro" element={<WeatherPage />} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/Main/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import WeatherPage from "./pages/Services/Weather/WeatherPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import RoverPage from "./pages/Services/Rover/RoverPage";
import SurfacePage from "./pages/Services/Surface/SurfacePage";
import APODPage from "./pages/Services/APOD/APODPage";
import AstroPage from "./pages/Services/Astro/AstroPage";
import PhotosPage from "./pages/Services/Photos/PhotosPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import SigningLayout from "./layouts/SigningLayout/SigningLayout";
import PrivateLayout from "./layouts/Private/PrivateLayout";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  },[]);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<PrivateLayout />}>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/weather" element={<WeatherPage />} />
          <Route path="/services/apod" element={<APODPage />} />
          <Route path="/services/rover" element={<RoverPage />} />
          <Route path="/services/photos" element={<PhotosPage />} />
          <Route path="/services/surface" element={<SurfacePage />} />
          <Route path="/services/astro" element={<AstroPage />} />
          <Route path="/profile" element={<div>Profile</div>} />
        </Route>
      </Route>
      <Route path="/signup" element={<SigningLayout />}>
        <Route index element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

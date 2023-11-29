import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/Main/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import WeatherPage from "./pages/Weather/WeatherPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/weather" element={<WeatherPage />} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

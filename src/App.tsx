import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/Main/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Route>
    </Routes>
  );
}

export default App;

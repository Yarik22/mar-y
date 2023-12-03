import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../config/firebase";

export default function PrivateLayout() {
  if (!auth.currentUser) {
    alert("Permission denied");
  }
  return <>{auth.currentUser ? <Outlet /> : <Navigate to={"/signup"} />}</>;
}

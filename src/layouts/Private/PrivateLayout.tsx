import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

export default function PrivateLayout() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        alert("Permission denied");
      }
    });
    return () => unsubscribe();
  }, []);
  return <>{auth.currentUser ? <Outlet /> : <Navigate to={"/signup"} />}</>;
}

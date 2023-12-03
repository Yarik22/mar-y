import { Outlet, useNavigate } from "react-router-dom";
import styles from "./signingLayout.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function SigningLayout() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <ArrowBackIosIcon className={styles.back} onClick={() => navigate("/")} />
      <Outlet />
    </div>
  );
}

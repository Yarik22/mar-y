import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Modal,
} from "@mui/material";
import { auth, db } from "../../config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

const photosCollectionRef = collection(db, "photos");
const profile = auth.currentUser;
const ProfilePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const [, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDelete = () => {
    onDeleteProfile();
    handleCloseModal();
  };
  const onDeleteProfile = async () => {
    try {
      navigate("/signup");
      const q = query(
        photosCollectionRef,
        where("user_id", "==", profile?.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "photos", document.id));
      });
      await profile?.delete();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card
      style={{
        zIndex: 2,
        maxWidth: 400,
        margin: "auto",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
      }}
    >
      <Avatar
        alt={"R"}
        src={
          profile?.photoURL ||
          "https://camo.githubusercontent.com/c6fe2c13c27fe87ac6581b9fe289d2f071bd1b4ef6f3e3c5fc2aba0bbc23fd88/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37632f50726f66696c655f6176617461725f706c616365686f6c6465725f6c617267652e706e67"
        }
        style={{ width: 100, height: 100, margin: "20px auto" }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {profile?.displayName || "Unnamed"}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Email: {profile?.email}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {profile?.emailVerified ? "Email Verified" : "Email Not Verified"}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Phone: {profile?.phoneNumber || "No cell"}
        </Typography>
        <Button variant="contained" color="error" onClick={handleOpenModal}>
          Delete Profile
        </Button>
      </CardContent>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vh",
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Are you sure you want to delete your account?
          </Typography>
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Yes, Delete
            </Button>
            <Button variant="contained" onClick={handleCloseModal}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default ProfilePage;

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Icon,
} from "@mui/material";
import Section from "../../components/Section/Section";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInExistingUser } from "../../data/users/firebase";

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(/^\S*$/, "Field cannot contain spaces")
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .matches(/^\S*$/, "Field cannot contain spaces")
    .min(8, "Password should be at least 8 characters")
    .max(40, "Password should not exceed 40 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,}$/,
      "Password must contain 1 uppercase letter, and 1 special character (not a letter)"
    ),
  repeatPassword: Yup.string()
    .required("Passwords are different")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};

const SignUpPage: React.FC = () => {
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        setShowError(false);
        navigate("/");
        return null;
      } catch (error: any) {
        console.log(error);
      }
      try {
        await signInExistingUser(values.email, values.password);
        navigate("/");
      } catch (error: any) {
        setShowError(true);
      }
    },
  });

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setShowError(false);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setShowError(true);
    }
  };
  return (
      <Container
        component="main"
        style={{
          width: "100vw",
          padding: "15px",
          backdropFilter: "blur(2px)",
          borderRadius: "5px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          background: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Section translateX={"0"} translateY={"-100px"} transition={0.2}>
                <Typography sx={{ marginTop: "15px" }} variant="h5">
                  Sign up in Marcy
                </Typography>
              </Section>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="repeatPassword"
                name="repeatPassword"
                label="Repeat Password"
                type="password"
                variant="outlined"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.repeatPassword &&
                  Boolean(formik.errors.repeatPassword)
                }
                helperText={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            Sign Up
          </Button>
          <Button
            onClick={signUpWithGoogle}
            fullWidth
            variant="contained"
            color="primary"
            style={{
              marginTop: "16px",
              height: "px",
              background: "white",
              color: "black",
            }}
            startIcon={
              <Icon className="material-icons">
                <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" />
              </Icon>
            }
          >
            Sign Up with Google
          </Button>
        </form>
        {showError && (
          <Typography
            style={{
              textAlign: "center",
              margin: "15px",
              color: "red",
              letterSpacing: "5px",
            }}
          >
            Wrong credentials
          </Typography>
        )}
      </Container>
  );
};

export default SignUpPage;

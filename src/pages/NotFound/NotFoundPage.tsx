import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        mt: 8,
        marginTop: 0,
      }}
    >
      <Typography variant="h1" color="primary" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;

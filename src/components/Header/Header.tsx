import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, useNavigate } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

const pages = [
  {
    name: "Services",
    endpoint: "/services",
  },
  {
    name: "Sign up",
    endpoint: "/signup",
  },
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      auth.signOut();
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppBar position="sticky" style={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <CustomLink to={"/"}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                fontWeight: "inherit",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MARCY
            </Typography>
          </CustomLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <div style={{ background: "rgb(25,118,210,0.9)" }}>
                {pages.map((page, idx) => (
                  <CustomLink to={page.endpoint} key={idx}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </CustomLink>
                ))}
              </div>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <NavLink to={"/"}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "inherit",
                fontWeight: "inherit",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MARCY
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, idx) => (
              <CustomLink to={page.endpoint} key={idx}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                >
                  {page.name}
                </Button>
              </CustomLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {auth.currentUser && (
              <Button
                onClick={handleLogout}
                style={{
                  color: "white",
                  border: "solid black 2px",
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  marginRight: "5px",
                  fontSize: "1.4vh",
                }}
              >
                Logout
              </Button>
            )}
            <CustomLink to={"/profile"}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    auth.currentUser?.photoURL ||
                    "https://camo.githubusercontent.com/c6fe2c13c27fe87ac6581b9fe289d2f071bd1b4ef6f3e3c5fc2aba0bbc23fd88/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37632f50726f66696c655f6176617461725f706c616365686f6c6465725f6c617267652e706e67"
                  }
                />
              </IconButton>
            </CustomLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

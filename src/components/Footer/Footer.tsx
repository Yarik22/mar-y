import { Container, IconButton, Tooltip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Container
      style={{
        fontSize: "20px",
        display: "flex",
        flexWrap: "wrap",
        color: "rgba(255,255,255,0.7)",
      }}
    >
      <div>
        {window.innerWidth > 800
          ? "Email: popov.yarik.popov@gmail.com"
          : "Gmail"}
        <Tooltip title="Copy">
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText("popov.yarik.popov@gmail.com");
            }}
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div>
        {window.innerWidth > 800 ? "Cell: +380953167438" : "Cell"}
        <Tooltip title="Copy">
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText("+380953167438");
            }}
          >
            <PhoneIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div>
        {window.innerWidth > 800 ? "Telegram: @Clemsonn" : "Telegram"}
        <Tooltip title="Visit">
          <IconButton href="https://t.me/Clemsonn" target="_blank">
            <TelegramIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Container>
  );
};

export default Footer;

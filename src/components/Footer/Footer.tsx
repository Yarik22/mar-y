import { Container, IconButton, Tooltip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Container style={{ fontSize: "16px", display: "flex", flexWrap: "wrap" }}>
      <div>
        Email: popov.yarik.popov@gmail.com
        <Tooltip title="Copy">
          <IconButton>
            <EmailIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div>
        Cell: +380953167438
        <Tooltip title="Copy">
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div>
        Telegram: @Clemsonn
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

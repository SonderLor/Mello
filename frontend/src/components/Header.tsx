import {AppBar, Toolbar, Typography, Button, Box} from "@mui/material";
import {Link} from "react-router-dom";
import LogoIcon from "../assets/logo.svg";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box component={Link} to="/"
             sx={{display: "flex", alignItems: "center", textDecoration: "none", color: "inherit"}}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              transition: "0.3s",
              "&:hover": {color: "#ff9800"},
            }}
          >
            <img src={LogoIcon} alt="Logo" style={{width: 32, height: 32, marginRight: 8}}/>
            <Typography variant="h5" sx={{fontWeight: "bold"}}>
              Mello
            </Typography>
          </Box>
        </Box>
        <Box sx={{marginLeft: "auto"}}>
          <Button color="inherit" component={Link} to="/">Главная</Button>
          <Button color="inherit" component={Link} to="/login">Вход</Button>
          <Button color="inherit" component={Link} to="/register">Регистрация</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

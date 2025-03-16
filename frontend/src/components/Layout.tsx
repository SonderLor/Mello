import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {Container, Box} from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Header/>
      <Container sx={{flexGrow: 1, mt: 4}}>
        <Outlet/>
      </Container>
      <Footer/>
    </Box>
  );
};

export default Layout;

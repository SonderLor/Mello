import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{textAlign: "center", py: 2, mt: 4, bgcolor: "#f0f0f0"}}>
      <Typography variant="body2">&copy; 2025 MyTrello. Все права защищены.</Typography>
    </Box>
  );
};

export default Footer;

import {Typography, Box, Grid, Card, CardContent, Button} from "@mui/material";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{
      minHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <Typography variant="h3" gutterBottom>Добро пожаловать в Mello</Typography>
      <Typography variant="h6" gutterBottom>
        Mello — инструмент для совместного управления задачами. Создавайте доски, управляйте задачами и работайте в
        команде!
      </Typography>
      <Grid container spacing={4} sx={{mt: 4}}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Почему Mello?</Typography>
              <Typography>Гибкость, удобство и мощные функции для команд.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Как это работает?</Typography>
              <Typography>Создавайте доски, перемещайте карточки и управляйте задачами в реальном времени.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Попробуйте прямо сейчас</Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}} component={Link}
                      to="/register">Регистрация</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

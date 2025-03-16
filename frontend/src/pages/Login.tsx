import {Box, TextField, Button, Typography, Card, CardContent} from "@mui/material";
import {useState} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh"}}>
      <Card sx={{width: 350, p: 3}}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Вход</Typography>
          <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <TextField label="Пароль" type="password" fullWidth margin="normal" value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
          <Button variant="contained" color="primary" fullWidth sx={{mt: 2}}>Войти</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;

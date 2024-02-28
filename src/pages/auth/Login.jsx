import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  Avatar,
  Grid,
  Box,
  CssBaseline,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const defaultTheme = createTheme();

const Login = () => {
  
  const navigate = useNavigate();
  const[auth,setAuth]=useState({
    user:null,
    token:null,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );

      if (res && res.data.success) {
        toast.success(res.data.message);
        // Your authentication logic here
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        });
         localStorage.setItem("auth", JSON.stringify(res.data));
         setTimeout(() => {
           navigate("/");
         }, 1000);

   
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error while Submitting data in frontEnd --> ", error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
      if (error.AxiosError) {
        toast.error(error.AxiosError.message);
      }
      if (error.message === "Network Error") {
        toast.error(
          "Network error occurred. Please check your internet connection and try again."
        );
      }
    }
  };

  return (
    <main>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to Holistic Harbor👋
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <ToastContainer />
      </ThemeProvider>
    </main>
  );
};

export default Login;

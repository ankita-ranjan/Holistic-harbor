
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Avatar,
  CssBaseline,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "./signup.css"; 

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      phone,
      address,
      answer,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        data
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error while submitting data:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="signup-container">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className="signup-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="given-name"
                name="Name"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                fullWidth
                id="exampleInputPhone"
                label="Phone No."
                name="phoneno"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
                fullWidth
                name="address"
                label="Enter Your Address"
                type="text"
                id="exampleInputAddress"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                required
                fullWidth
                label="What is your favourite sports?"
                type="text"
                id="exampleInputgame"
                autoComplete="game"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="signup-submit"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default SignUp;

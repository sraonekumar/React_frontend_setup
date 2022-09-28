import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CustomImage,
  CustomTextField,
  CustomSnackbar,
} from "../common/components/ui";
import logo from "../assets/logo.svg";
import { isValidEmail, redirectToPage } from "../Utils/utils";

const theme = createTheme();

export default function SignInSide() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [isOtpSent, setOtpSent] = useState(false);
  const [snackData, setSnackData] = useState({ isOpen: false, msg: "" });
  const intialErrorState = {
    name: {
      field: "name",
      error: false,
    },
    email: {
      field: "email",
      error: false,
    },
    password: {
      field: "password",
      error: false,
    },
    otp: {
      field: "otp",
      error: false,
    },
  };
  const [errorStatus, setErrorStatus] = useState(intialErrorState);

  const loginUser = () => {
    if (!name) {
      setSnackData({ isOpen: true, msg: "Please enter a valid User name!" });
      setErrorStatus({ ...errorStatus, name: { error: true } });
      return;
    }
    if (!password) {
      setSnackData({ isOpen: true, msg: "Please enter a valid password!" });
      setErrorStatus({ ...errorStatus, password: { error: true } });
      return;
    }
    if (!isValidEmail(email)) {
      setSnackData({ isOpen: true, msg: "Please enter a valid email id!" });
      setErrorStatus({ ...errorStatus, email: { error: true } });
      return;
    }
    setErrorStatus(intialErrorState);
    console.log({ name, email, password });
    setOtpSent(true);
  };

  const verifyOTP = () => {
    if (!/^\d{4}$/gm.test(otp)) {
      setSnackData({ isOpen: true, msg: "Please enter a valid otp!" });
      setErrorStatus({ ...errorStatus, otp: { error: true } });
      return;
    }

    redirectToPage("/dashboard");
  };

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", background: "black" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "grey",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{ background: "black" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="EY Logo"
              class="responsive"
              width="150"
              height="250"
            />
            <Box component="form" noValidate sx={{ mt: 1, p: 4 }}>
              {!isOtpSent && (
                <>
                  <CustomTextField
                    id="name"
                    placeholder="Name"
                    action={(e) => {
                      setName(e.target.value);
                    }}
                    variant="outlined"
                    value={name}
                    errorStatus={errorStatus?.name?.error}
                  />
                  <CustomTextField
                    id="email"
                    placeholder="Email"
                    action={(e) => {
                      setEmail(e.target.value);
                    }}
                    variant="outlined"
                    value={email}
                    errorStatus={errorStatus?.email?.error}
                  />
                  <CustomTextField
                    id="password"
                    placeholder="Password"
                    action={(e) => {
                      setPassword(e.target.value);
                    }}
                    variant="outlined"
                    type="password"
                    value={password}
                    errorStatus={errorStatus?.password?.error}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, color: "black", background: "yellow" }}
                    onClick={() => {
                      loginUser();
                    }}
                  >
                    Sign In
                  </Button>

                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </>
              )}
              {isOtpSent && (
                <>
                  <CustomTextField
                    id="otp"
                    placeholder="OTP"
                    action={(e) => {
                      setOTP(e.target.value);
                    }}
                    variant="outlined"
                    value={otp}
                    errorStatus={errorStatus?.otp?.error}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, color: "black", background: "yellow" }}
                    onClick={() => {
                      verifyOTP();
                    }}
                  >
                    Verify OTP
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

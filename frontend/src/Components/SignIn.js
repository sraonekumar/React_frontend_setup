import React, { useState, useEffect } from "react";
import { Grid, Box, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CustomImage,
  CustomTextField,
  CustomSnackbar,
} from "../common/components/ui";
import ey from "../assets/ey.PNG";
import logo from "../assets/logo.svg";
import "./Style.css";
import { redirectToPage } from "../Utils/utils";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [isOtpSent, setOtpSent] = useState(false);
  const [snackData, setSnackData] = useState({ isOpen: false, msg: "" });

  const loginUser = () => {
    setOtpSent(true);
  };

  const verifyOTP = () => {
    redirectToPage("/dashboard");
  };

  useEffect(() => {}, []);

  return (
    <Box className="mainWrapper">
      <Grid container spacing={0}>
        <Grid container md={12} row>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 10,
                  ml: 25,
                  width: 350,
                  height: 460,
                  borderRadius: 5,
                },
              }}
            >
              <Paper elevation={3}>
                <img src={ey} alt="logo-image" className="imgWarpper" />
              </Paper>
            </Box>
          </Grid>
          {!isOtpSent && (
            <Grid item md={6} className="loginWrapper">
              <div className="logoWrapper">
                <CustomImage imageURL={logo} width={100} />
              </div>
              <Box mt={2}>
                <div className="inputLabelOuterWrapper">
                  <CustomTextField
                    id="name"
                    placeholder="Name"
                    action={(e) => {
                      setName(e.target.value);
                    }}
                    variant="outlined"
                    value={name}
                  />
                </div>
                <div className="inputLabelOuterWrapper">
                  <CustomTextField
                    id="email"
                    placeholder="Email"
                    action={(e) => {
                      setEmail(e.target.value);
                    }}
                    variant="outlined"
                    value={email}
                  />
                </div>
                <div className="inputLabelOuterWrapper">
                  <CustomTextField
                    id="password"
                    placeholder="Password"
                    action={(e) => {
                      setPassword(e.target.value);
                    }}
                    variant="outlined"
                    value={password}
                    type="password"
                  />
                </div>
                <Button onClick={() => loginUser()} className="loginbtnWrapper">
                  login
                </Button>
                <Link to="/send-link">Forgot Password?</Link>
              </Box>
            </Grid>
          )}

          {isOtpSent && (
            <Grid item md={6} className="otpWrapper">
              <div className="logoWrapper">
                <CustomImage imageURL={logo} width={100} />
              </div>
              <div style={{ marginTop: "45px" }}>
                <div className="inputLabelOuterWrapper">
                  <CustomTextField
                    id="otp"
                    placeholder="OTP"
                    action={(e) => {
                      setOTP(e.target.value);
                    }}
                    variant="outlined"
                    value={otp}
                  />
                </div>
                <Button onClick={() => verifyOTP()} className="loginbtnWrapper">
                  Verify OTP
                </Button>
              </div>
            </Grid>
          )}
        </Grid>
      </Grid>

      <CustomSnackbar
        isOpen={snackData.isOpen}
        msg={snackData.msg}
        onClose={() => {
          setSnackData({ isOpen: false, msg: "" });
        }}
      />
    </Box>
  );
}

export default SignIn;

import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import hospital from "../images/hospital.jpg";
import UserContext from "../context/user";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Box,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const LoginPage = (props) => {
  const userCtx = useContext(UserContext);
  const [role, setRole] = useState(""); // set thru the choosing of button
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const { ok, data } = await fetchData("/auth/login", "POST", {
      role: role,
      username: user,
      password: password,
    });

    if (ok) {
      userCtx.setAccessToken(data.access);
      const decoded = jwt_decode(data.access);
      userCtx.setRole(decoded.role);
      if (decoded.role === "user") {
        navigate("/patient-dashboard");
      } else if (decoded.role === "doctor") {
        navigate("/doctor-dashboard");
      } else {
        console.log("invalid Login");
      }

      setRole("");
      setUser("");
      setPassword("");
    }
  };
  const buttonStyling = {
    backgroundColor: "#004B64",
    fontWeight: 400,
    font: "Roboto",
    fontSize: "1rem",
    textTransform: "none",
    width: "600px",
  };
  return (
    <div
      style={{ backgroundColor: "#FFFFFF", margin: "0 auto", height: "100vh" }}
    >
      <div style={{ margin: "38px 0px" }} onClick={() => setRole("")}>
        <img src={hospital} style={{ width: "1200px", height: "400px" }} />
      </div>

      <div
        style={{
          width: "100%",
          padding: "0 24px",
          margin: "38px 0px",
        }}
      >
        {/* if no role selected, show selection buttons */}
        {!role && (
          <Stack spacing={5}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                sx={buttonStyling}
                variant="contained"
                size="large"
                onClick={() => setRole("user")}
              >
                Patient Login
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                sx={buttonStyling}
                variant="contained"
                size="large"
                onClick={() => setRole("doctor")}
              >
                Doctor Login
              </Button>
            </Box>
          </Stack>
        )}

        {/* once role is selected, show input boxes */}
        {role && (
          <Stack spacing={5}>
            <Stack spacing={2}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="user">
                    {role == "user" ? "patient username" : "doctor username"}
                  </InputLabel>
                  <OutlinedInput
                    id="username"
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <HighlightOffIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => setUser("")}
                        />
                      </InputAdornment>
                    }
                    label={
                      role == "patient" ? "patient username" : "doctor username"
                    }
                  />
                </FormControl>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <HighlightOffIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => setPassword("")}
                        />
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
            </Stack>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                sx={buttonStyling}
                disabled={!(user && password)}
                variant="contained"
                size="large"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

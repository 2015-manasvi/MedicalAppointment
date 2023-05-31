import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import hospital from "../images/hospital.jpg";
import UserContext from "../context/user";
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

const LoginPage = () => {
  const userCtx = useContext(UserContext);
  const [role, setRole] = useState(""); // set thru the choosing of button
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { ok, data } = await fetchData("/auth/login", "POST", {
      role: role,
      user: user,
      password: password,
    });

    if (ok) {
      userCtx.setUser(data);
      userCtx.setRole(role);
      if (role == "patient") {
        userCtx.setAuthorised(true);
      }

      if (role == "doctor") {
        userCtx.setDoctor(data);
      }
    } else {
      console.log(data);
    }
    setRole("");
    setUser("");
    setPassword("");
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
                onClick={() => setRole("patient")}
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
                    {role == "patient" ? "patient username" : "doctor username"}
                  </InputLabel>
                  <OutlinedInput
                    id="user"
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

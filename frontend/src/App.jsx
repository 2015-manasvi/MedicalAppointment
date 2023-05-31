import React, { useState } from "react";
import UserContext from "./context/user";
import PageContext from "./context/page";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

function App() {
  // current user's Object
  const [user, setUser] = useState({});

  // set on login
  const [role, setRole] = useState(""); // 'patient' or'doctor'
  const [patient, setPatient] = useState({});
  const [doctor, setDoctor] = useState({});
  const [authorised, setAuthorised] = useState(false);

  return (
    <>
      <UserContext.Provider
        value={{
          authorised,
          setAuthorised,
          user,
          setUser,
          role,
          setRole,
          patient,
          setPatient,
          doctor,
          setDoctor,
        }}
      >
        {!role && <LoginPage />}

        {role && (
          <>
            <HomePage />
          </>
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;

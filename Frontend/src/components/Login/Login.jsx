// import React, { useState } from "react";
// import { Box, Button, Container, TextField, Typography } from "@mui/material";
// import useGetUser from "../../hooks/useGetUser"; // Adjust the import path

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   const { fetchUser, isFetchingUser } = useGetUser(setUser);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchUser(username, password);
//     console.log(`user logged in ${user.Username}`);
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         height="100vh"
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             disabled={isFetchingUser}
//             style={{ margin: "24px 0 16px" }}
//           >
//             {isFetchingUser ? "Logging in..." : "Login"}
//           </Button>
//         </form>
//         {user && (
//           <Typography variant="body1" color="textSecondary">
//             Welcome, {user.Username}!
//           </Typography>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Login;


import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Link,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext.jsx"; // Adjust the import path
import useGetUser from "../../hooks/useGetUser.js"; // Adjust the import path

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const { fetchUser, isFetchingUser } = useGetUser(setUser);
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const fetchedUser = await fetchUser(username, password);
  //   console.log('fetched user: ', fetchUser);
  //   if (fetchedUser) {
  //     // No need to set user and token here, it's already handled in useGetUser hook
  //     navigate("/home"); // Navigate to home after successful login
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchedUser = await fetchUser(username, password); // Call fetchUser with username and password
    console.log("fetched user: ", fetchedUser);
    if (fetchedUser) {
      navigate("/home"); // Navigate to home after successful login
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/home"); // Navigate to the homepage when user is set
  //   }
  // }, [user, navigate]);

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Visiting first time <Link href="/signup">Sign up here</Link>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isFetchingUser}
            style={{ margin: "24px 0 16px" }}
          >
            {isFetchingUser ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;

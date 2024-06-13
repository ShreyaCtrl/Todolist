import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Login from "./components/Login";

function App() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    // {
    !userLogin ? (
      <>
        <Navbar />
        <Login setUserLogin={setUserLogin} />
      </>
    ) : (
      <>
        <Navbar />
        <Todos />
        <ToastContainer />
      </>
    )
    // }
    // <>
    //   <Navbar />
    //   <Todos />
    //   <ToastContainer />
    // </>
  );
}

export default App;
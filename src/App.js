import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./store/auth-context";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainNavigation from "./layout/MainNavigation";
import SnackContextProvider from "./store/snack-context";
import Snackbar from "./layout/Snackbar";
import { SnackContext } from "./store/snack-context";
import { useContext } from "react";

function App() {
  const { pathname } = useLocation();
  const snackCtx = useContext(SnackContext);
  return (
    <AuthContextProvider>
      {pathname !== "/login" && pathname !== "/register" && <MainNavigation />}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Snackbar isActive={snackCtx.snackVisible} message={snackCtx.message} />
    </AuthContextProvider>
  );
}

export default App;

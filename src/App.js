import { useContext } from "react";
import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import { AuthContext } from "./Context/AuthContext.js";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./style.scss";

function App() {
  
  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
     <BrowserRouter>
     <Routes>
        <Route path="/" >
          <Route index element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
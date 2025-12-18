import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreatePickup from "./pages/CreatePickup";
import MyPickups from "./pages/MyPickups";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";
import AdminEwaste from "./pages/AdminEwaste";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-pickup" element={<CreatePickup />} />
        <Route path="/my-pickups" element={<MyPickups />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/ewaste" element={<AdminEwaste />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;

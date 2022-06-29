import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Profilepage from "./Profilepage";
import Loginpage from "./Loginpage";
import Registerpage from "./Registerpage";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<Profilepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
    </Routes>   
    </>
  );
}

export default App;

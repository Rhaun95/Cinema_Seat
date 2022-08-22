import { Route, Routes } from "react-router-dom";
import './App.css';
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Test from "./pages/Test";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/book" element={<Booking/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/mypage" element={<MyPage/>} />
    </Routes>
    </>
  );
}

export default App;

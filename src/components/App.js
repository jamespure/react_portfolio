import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePage";
import Header from "./Header/Header";
import Cursor from './Cursor/Cursor';

function App() {
  return (
    <>
    <Header />
    <Cursor/>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </>
  );
}

export default App;

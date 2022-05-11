import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePage";
import Header from "./Header/Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </>
  );
}

export default App;

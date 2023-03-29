import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";
import CreateCard from "./components/CreateCard";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/Create_Card" element={<CreateCard />} />
          <Route path="/Update_Card/:id" element={<CreateCard update={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

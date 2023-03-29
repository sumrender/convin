import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";
import CreateCard from "./components/CreateCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/Create_Card" element={<CreateCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

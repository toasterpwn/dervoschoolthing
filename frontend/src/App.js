import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import List from "./pages/List";
import Redirect from "./pages/Redirect";
function App() {
  return (
    <div className="bg-[#2E3440] h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/url-list" element={<List />} />
          <Route path="/url/:id" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

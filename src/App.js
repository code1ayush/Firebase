import Begin from "./components/Begin";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Begin />} />
          <Route path="/image" element={<ImageUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import LandingPage from "./pages/LandingPage";
import SearchCarPage from "./pages/SearchCarPage";
import DetailCarPage from "./pages/DetailCarPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/search-car" element={<SearchCarPage />}></Route>
          <Route path="/search-car/:id" element={<DetailCarPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import LandingPage from "./pages/LandingPage";
import SearchCarPage from "./pages/SearchCarPage";
import DetailCarPage from "./pages/DetailCarPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/search-car" element={<SearchCarPage />}></Route>
        <Route path="/search-car/:id" element={<DetailCarPage />}></Route>
        {/* // untuk detail car page bisa diakses tersendiri di halaman terpisah sesuai id, namun better, suggestion dari saya untuk  flow nya dijadikan satu dengan search car page untuk ux agar lebih baik*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

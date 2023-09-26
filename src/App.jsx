import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="bg-black">
      <div className="mx-auto ">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:category" element={<PortfolioPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

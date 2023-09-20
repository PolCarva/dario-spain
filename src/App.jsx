import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import WhatsappFixedIcon from "./components/WhatsappFixedIcon";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <div className="bg-black">
      <div className="mx-auto ">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </Router>
        <WhatsappFixedIcon/>     </div>
    </div>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";


import "./App.css";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";




function App() {
  return (
    <div className="bg-black">
      <div className="mx-auto">
        <I18nextProvider i18n={i18n}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:category" element={<PortfolioPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </I18nextProvider>
      </div>
    </div>
  );
}

export default App;

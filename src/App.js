import { BrowserRouter,Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbarprin from "./components/Navbarprin";
import Header from "./layout/Header"
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navbarprin/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<ContactoPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

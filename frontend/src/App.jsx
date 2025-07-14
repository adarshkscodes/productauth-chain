import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import RegisterProduct from "./components/RegisterProduct";
import VerifyProduct   from "./components/VerifyProduct";
import QRScanner       from "./components/QRScanner";

export default function App() {
  // ask MetaMask once on load
  useEffect(() => {
    if (window.ethereum) window.ethereum.request({ method: "eth_requestAccounts" });
  }, []);

  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/" className="font-bold">ProductAuth Chain</Link>
        <Link to="/scan">Scan QR</Link>
      </nav>

      <main className="p-4">
        <Routes>
          <Route path="/"           element={<RegisterProduct />} />
          <Route path="/verify/:id" element={<VerifyProduct />} />
          <Route path="/scan"       element={<QRScanner />} />
        </Routes>
      </main>
    </Router>
  );
}

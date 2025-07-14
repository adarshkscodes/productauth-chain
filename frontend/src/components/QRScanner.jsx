import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function QRScanner() {
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 12, qrbox: 250 });
    scanner.render(
      (text) => {
        scanner.clear().catch(console.error);
        // assuming URL ends in /<id>
        const id = text.trim().split("/").pop();
        navigate(`/verify/${id}`);
      },
      (err) => console.warn(err)
    );
    return () => scanner.clear().catch(() => {});
  }, [navigate]);

  return <div id="reader" className="mx-auto" />;
}

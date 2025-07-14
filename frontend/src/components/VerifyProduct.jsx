import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getContract } from "../contract";

export default function VerifyProduct() {
  const { id: routeId }  = useParams();
  const [inputId, setIn] = useState(routeId ?? "");
  const [prod, setProd]  = useState(null);
  const [err,  setErr]   = useState("");
  const nav              = useNavigate();

  const fetchProduct = async (tokenId) => {
    try {
      const c = await getContract();
      const p = await c.verifyProduct(tokenId);
      setProd(p);
      setErr("");
    } catch {
      setErr("Product not found / wrong ID");
      setProd(null);
    }
  };

  // auto‑load when opened via /verify/:id
  useEffect(() => {
    if (routeId) fetchProduct(routeId);
  }, [routeId]);

  const handleVerify = () => {
    if (!inputId) return;
    nav(`/verify/${inputId}`);          // changes URL, triggers useEffect
    fetchProduct(inputId);
  };

  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-3">Verify Product</h2>

      <div className="flex gap-2 mb-4">
        <input className="border p-2 rounded flex-1"
               placeholder="Enter Token ID"
               value={inputId}
               onChange={(e) => setIn(e.target.value)} />
        <button className="bg-green-600 text-white p-2 rounded"
                onClick={handleVerify}>Verify</button>
      </div>

      {err && <p className="text-red-600">{err}</p>}

      {prod && (
        <div className="border rounded p-4 space-y-1 bg-gray-50">
          <p><b>Name:</b> {prod.name}</p>
          <p><b>Description:</b> {prod.description}</p>
          <p><b>Token URI:</b> {prod.tokenURI}</p>
          <p className="break-all"><b>Owner:</b> {prod.owner}</p>
        </div>
      )}
    </section>
  );
}

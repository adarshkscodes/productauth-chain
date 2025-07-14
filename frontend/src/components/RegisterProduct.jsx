import { useState } from "react";
import QRCode from "react-qr-code";
import { getContract } from "../contract";

export default function RegisterProduct() {
  const [form, setForm]   = useState({ name: "", description: "", tokenURI: "" });
  const [tokenId, setId]  = useState("");
  const [status, setStat] = useState("");

  const handle = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const register = async () => {
    try {
      setStat("Waiting for wallet...");
      const c  = await getContract();
      const tx = await c.registerProduct(form.name, form.description, form.tokenURI);
      setStat("Mining… ⛏️");
      await tx.wait();

      // safest: read the counter after tx mines
      const latest = await c.productCounter();
      setId(latest.toString());
      setStat("Success ✅");
    } catch (err) {
      console.error(err);
      setStat(err.message);
    }
  };

  return (
    <section className="max-w-md ml-auto mr-auto">
      <h2 className="text-xl font-semibold mb-3">Register Product</h2>

      <input className="border p-2 rounded mb-2 w-full" placeholder="Name"
             onChange={handle("name")} />
      <textarea className="border p-2 rounded mb-2 w-full" rows="3" placeholder="Description"
                onChange={handle("description")} />
      <input className="border p-2 rounded mb-4 w-full" placeholder="Token URI (ipfs://...)"
             onChange={handle("tokenURI")} />

      <button className="bg-blue-600 text-white rounded p-2 w-full hover:bg-blue-700"
              onClick={register}>Register</button>

      {status && <p className="text-sm mt-2">{status}</p>}

      {tokenId && (
        <div className="mt-6 text-center">
          <p className="mb-2">Token ID: <span className="font-mono">{tokenId}</span></p>
          <QRCode value={`http://localhost:5173/verify/${tokenId}`} className="inline-block bg-white p-2" />
        </div>
      )}
    </section>
  );
}

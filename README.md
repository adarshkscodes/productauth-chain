# 🛡️ ProductAuth Chain – Blockchain-Based Product Authentication with QR

A full-stack decentralized application (dApp) that allows **manufacturers to register products** on-chain and **consumers to verify authenticity** via QR codes. Built with **Solidity**, **Hardhat**, **React**, **Ethers.js v6**, and **Tailwind CSS**.

> 👨‍💻 Built by [Adarsh Kumar](https://github.com/adarshkscodes) — Blockchain Developer  
> 🔐 Project status: ✅ Completed | 💡 Open for extension (IPFS, NFTs, IP validations)

---

## 🚀 Features

- **Smart Contract** (Solidity):
  - Registers products with a unique tokenId (non-transferable).
  - Stores product details: name, description, and tokenURI.
  - Emits event on product registration.
  - Supports verification by tokenId.

- **Frontend** (React + Vite + Tailwind):
  - Product registration form for manufacturers.
  - Generates a QR code after registration with a verification link.
  - Mobile-friendly UI to scan QR code or enter tokenId manually.
  - Displays full product authenticity data from blockchain.

- **QR Code Integration:**
  - Uses `react-qr-code` for generation.
  - Uses `html5-qrcode` for scanning via webcam.

---

## 🧠 Tech Stack

| Layer         | Tech Used                               |
|--------------|------------------------------------------|
| Smart Contract | Solidity `^0.8.17`, Hardhat, Ethers v6 |
| Frontend       | React 19, Vite, Tailwind CSS           |
| QR Integration | `react-qr-code`, `html5-qrcode`        |
| Wallet         | MetaMask (Ethers.js v6 integration)    |
| Network        | Hardhat Localhost (chainId: 31337)     |

---

## 📂 Project Structure

productauth-chain/
├── smart-contract/
│ ├── contracts/
│ │ └── ProductAuth.sol
│ ├── scripts/
│ │ └── deploy.js
│ └── hardhat.config.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── RegisterProduct.jsx
│ │ │ ├── VerifyProduct.jsx
│ │ │ └── QRScanner.jsx
│ │ ├── contract.js
│ │ ├── ProductAuthABI.json
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── index.html
│
├── README.md
└── screenshots/
└── register.png, scan.png


---

## ⚙️ Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/adarshkscodes/productauth-chain.git
cd productauth-chain


2. Start Hardhat local blockchain
bash

cd smart-contract
npm install
npx hardhat node
3. Deploy Smart Contract
In a second terminal:

bash

npx hardhat run scripts/deploy.js --network localhost
Copy the deployed contract address and update it in frontend/src/contract.js

4. Run Frontend
bash

cd ../frontend
npm install
npm run dev
Open: http://localhost:5173

✅ How It Works
👨‍🏭 Manufacturer Flow
Connect wallet via MetaMask.

Register a product using name, description, and optional tokenURI.

A tokenId is generated and stored on-chain.

A QR code is generated linking to localhost:5173/verify/<tokenId>.

📱 Consumer Flow
Open the dApp and go to Scan QR.

Scan the QR code on the product packaging.

Instantly view product authenticity and details on-chain.

📌 Sample Smart Contract Snippet
solidity

function registerProduct(
    string calldata name,
    string calldata description,
    string calldata tokenURI
) external {
    productCounter++;
    products[productCounter] = Product(name, description, tokenURI, msg.sender);
    emit ProductRegistered(productCounter, name, msg.sender);
}

📦 Dependencies
json

"dependencies": {
  "ethers": "^6.x",
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^6.x",
  "react-qr-code": "^2.x",
  "html5-qrcode": "^2.x"
}
🔐 Security (optional upgrade ideas)
Make registerProduct() owner-only.

Validate tokenURI against IPFS format.

Add metadata hash verification on-chain.

🤝 Contributing
Want to extend this to use:

IPFS for metadata hosting?

ERC-721 tokens?

NFT-based product identity?

Feel free to fork and raise a PR or reach out on LinkedIn!

📃 License
MIT License – feel free to use for academic, portfolio, or commercial prototypes.

✨ Credits
Built with ❤️ by Adarsh Kumar
Blockchain Developer | Ethereum | Solidity | Ethers.js | Vite | React

markdown


---

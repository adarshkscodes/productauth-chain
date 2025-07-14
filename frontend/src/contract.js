import { ethers } from "ethers";

// ✅ 1. Your deployed contract address
export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// ✅ 2. ABI directly embedded
const abi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "name", "type": "string" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }
    ],
    "name": "ProductRegistered",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "productCounter",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "products",
    "outputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "description", "type": "string" },
      { "internalType": "string", "name": "tokenURI", "type": "string" },
      { "internalType": "address", "name": "owner", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "description", "type": "string" },
      { "internalType": "string", "name": "tokenURI", "type": "string" }
    ],
    "name": "registerProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "verifyProduct",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "string", "name": "tokenURI", "type": "string" },
          { "internalType": "address", "name": "owner", "type": "address" }
        ],
        "internalType": "struct ProductAuth.Product",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// ✅ 3. Return contract instance
export async function getContract() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
}

# TerraTrade

TerraTrade is a decentralized marketplace for tokenized real estate assets. Built for the Pharos Hackathon (RWA & Payments track).

## 📦 Stack
- Hardhat (Solidity)
- React + Vite + Tailwind
- Ethers.js

## 🚀 How to Run (Locally)

### 1. Smart Contract
```bash
cd contracts
npm install
npx hardhat compile
npx hardhat node
npx hardhat run scripts/deploy.js --network PHAROS
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

Make sure MetaMask is connected to localhost:8545.


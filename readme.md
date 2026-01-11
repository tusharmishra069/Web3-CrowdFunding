# Web3 CrowdFunding Platform

A decentralized crowdfunding platform built on Ethereum blockchain that enables users to create, discover, and fund campaigns transparently and securely using smart contracts.

## 🌟 Features

- **Create Campaigns**: Launch your own crowdfunding campaigns with custom goals and deadlines
- **Browse Campaigns**: Discover and explore active campaigns from the community
- **Secure Donations**: Make contributions using cryptocurrency (ETH) with blockchain transparency
- **Real-time Tracking**: Monitor campaign progress, total backers, and remaining time
- **User Profiles**: View your created campaigns and donation history
- **Transparent Transactions**: All transactions recorded on the blockchain for complete transparency

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                  Web3 CrowdFunding Platform                         │
│                     (React + Vite Frontend)                         │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │     Home     │  │   Create     │  │   Campaign   │             │
│  │     Page     │  │   Campaign   │  │   Details    │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │    Profile   │  │    Navbar    │  │   Sidebar    │             │
│  │     Page     │  │  Component   │  │  Component   │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │              State Context Provider                           │ │
│  │  • Campaign Management  • Wallet Connection  • Donations      │ │
│  └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                        Web3 SDK Integration
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    Thirdweb SDK + Ethers.js                         │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    Contract Interactions                      │  │
│  │  • Connect Wallet  • Sign Transactions  • Read Contract Data │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │ createCampaign│ │ donateToCampaign│ │ getCampaigns│            │
│  │   function   │  │   function   │  │   function   │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐                                │
│  │ getDonations │  │   MetaMask   │                                │
│  │   function   │  │   Wallet     │                                │
│  └──────────────┘  └──────────────┘                                │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                        Blockchain Network
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   Ethereum Blockchain (Sepolia)                     │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │              CrowdFunding Smart Contract                      │ │
│  │                      (Solidity)                               │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │   Campaign   │  │   Campaign   │  │   Campaign   │             │
│  │    Struct    │  │    Array     │  │   Mapping    │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │   Donators   │  │  Donations   │  │    Events    │             │
│  │    Array     │  │    Array     │  │   Emitted    │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Flow

**Campaign Creation Flow:**
```
User → Create Campaign Page → State Context → Thirdweb SDK → 
MetaMask (Sign Transaction) → Smart Contract → Blockchain → 
Transaction Confirmed → UI Updated
```

**Donation Flow:**
```
User → Campaign Details → Donate Button → State Context → 
Thirdweb SDK → MetaMask (Sign + Send ETH) → Smart Contract → 
Blockchain → Donators Array Updated → UI Refreshed
```

**Data Retrieval Flow:**
```
User → Home Page → State Context → Thirdweb SDK → 
Smart Contract (Read) → Parse Campaign Data → Display Cards
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### Web3 Integration
- **Thirdweb SDK** - Web3 development framework
- **Ethers.js** - Ethereum library for blockchain interaction
- **MetaMask** - Cryptocurrency wallet integration

### Smart Contracts
- **Solidity** - Smart contract programming language
- **Hardhat** - Ethereum development environment
- **Sepolia Testnet** - Ethereum test network

## 📁 Project Structure

```
CrowdFund/
├── client/                    # Frontend application
│   ├── src/
│   │   ├── assets/           # Images, icons, SVGs
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── FundCard.tsx
│   │   │   ├── CustomButton.tsx
│   │   │   ├── FormField.tsx
│   │   │   ├── CountBox.tsx
│   │   │   ├── Loader.tsx
│   │   │   └── SuccessModal.tsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── CreateCampaign.tsx
│   │   │   ├── CampaignDetails.tsx
│   │   │   └── Profile.tsx
│   │   ├── context/          # React Context for state management
│   │   │   └── index.tsx
│   │   ├── utils/            # Utility functions
│   │   ├── constants/        # App constants
│   │   ├── App.tsx           # Main app component
│   │   └── main.tsx          # Entry point
│   ├── package.json
│   └── vite.config.ts
│
└── web3/                      # Smart contracts
    ├── contracts/
    │   └── CrowdFunding.sol  # Main crowdfunding contract
    ├── hardhat.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask browser extension
- Sepolia testnet ETH (get from faucet)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tusharmishra069/Web3-CrowdFunding.git
   cd CrowdFund
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install smart contract dependencies**
   ```bash
   cd ../web3
   npm install
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the `client` directory:
   ```env
   VITE_CONTRACT_ADDRESS=your_deployed_contract_address
   ```

5. **Run the development server**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**
   
   Open your browser and navigate to `http://localhost:5173`

### Smart Contract Deployment

1. Configure Hardhat with your Sepolia network credentials in `web3/hardhat.config.js`
2. Deploy the contract:
   ```bash
   cd web3
   npx hardhat run scripts/deploy.js --network sepolia
   ```
3. Copy the deployed contract address to your `.env` file


## 🔑 Key Features Explained

### Campaign Creation
Users can create campaigns by providing:
- Campaign title and description
- Funding goal (in ETH)
- Deadline
- Campaign image URL

### Donation System
- Connect MetaMask wallet
- Browse available campaigns
- Donate any amount in ETH
- View all donators and their contributions
- Real-time updates on campaign progress

### Transparency
- All transactions recorded on blockchain
- View complete donation history
- Track campaign creator's address
- Monitor funds collected vs. goal

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Repository**: [https://github.com/tusharmishra069/Web3-CrowdFunding](https://github.com/tusharmishra069/Web3-CrowdFunding)
- **Thirdweb**: [https://thirdweb.com](https://thirdweb.com)
- **Sepolia Faucet**: [https://sepoliafaucet.com](https://sepoliafaucet.com)

## 👨‍💻 Author

**Tushar Mishra**
- GitHub: [@tusharmishra069](https://github.com/tusharmishra069)

---

Built with ❤️ using React, Solidity, and Thirdweb

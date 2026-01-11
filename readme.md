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

## 🚢 Production Deployment

### Environment Variables

Before deploying to production, ensure you have the following environment variables configured:

```env
# Required
VITE_CONTRACT_ADDRESS=0x...        # Your deployed smart contract address
VITE_THIRDWEB_CLIENT_ID=...        # Your Thirdweb client ID (get from thirdweb.com/dashboard)
```

See `.env.example` in the `client` directory for a complete template.

### Building for Production

1. **Install dependencies** (if not already done):
   ```bash
   cd client
   npm install
   ```

2. **Build the production bundle**:
   ```bash
   npm run build
   ```
   
   This will:
   - Compile TypeScript
   - Bundle and minify code with Vite
   - Remove console.log statements
   - Optimize chunks for better caching
   - Generate production-ready files in `dist/`

3. **Preview the production build locally**:
   ```bash
   npm run preview
   ```
   Access at `http://localhost:4173`

### Deployment Platforms

#### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd client
   vercel
   ```

3. Set environment variables in Vercel dashboard:
   - `VITE_CONTRACT_ADDRESS`
   - `VITE_THIRDWEB_CLIENT_ID`

#### Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   cd client
   netlify deploy --prod
   ```

3. Configure environment variables in Netlify dashboard

#### Manual Deployment

After building, upload the `client/dist/` directory to any static hosting service (AWS S3, GitHub Pages, etc.)

### Production Checklist

Before deploying to production, ensure:

- [ ] Smart contract is deployed and verified on Sepolia (or mainnet)
- [ ] Environment variables are configured correctly
- [ ] Production build completes without errors
- [ ] All console.log statements are removed (automatic in build)
- [ ] MetaMask connection works on production URL
- [ ] Campaign creation and donation flows tested
- [ ] 404 page displays correctly for invalid routes
- [ ] SEO meta tags are properly configured
- [ ] Error boundaries catch and display errors gracefully

### Troubleshooting

#### Build Errors

**Issue**: `terser not found` error during build
```bash
# Solution: Install terser as dev dependency
npm install -D terser
```

**Issue**: TypeScript compilation errors
```bash
# Solution: Check for type errors
npx tsc --noEmit
```

#### Runtime Errors

**Issue**: "Contract is not initialized" error
- **Solution**: Ensure `VITE_CONTRACT_ADDRESS` is set correctly in environment variables
- Verify the contract address is valid and deployed on the correct network

**Issue**: MetaMask not connecting
- **Solution**: Ensure MetaMask is installed and connected to Sepolia testnet
- Check that the website URL is added to MetaMask's connected sites

**Issue**: Transactions failing
- **Solution**: Ensure you have sufficient Sepolia ETH for gas fees
- Verify the smart contract is deployed and accessible
- Check MetaMask network settings

#### Performance Issues

**Issue**: Large bundle size warnings
- The app uses Web3 libraries which are inherently large
- Chunk splitting is already configured to optimize caching
- Consider implementing route-based code splitting for further optimization

### Security Considerations

- Never commit `.env` files to version control
- Always use environment variables for sensitive data
- Test thoroughly on testnet before deploying to mainnet
- Consider getting smart contracts audited before mainnet deployment
- Implement rate limiting if deploying backend services

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

# Web3 CrowdFunding Platform - Complete Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Core Concepts](#core-concepts)
3. [System Architecture](#system-architecture)
4. [Technical Implementation](#technical-implementation)
5. [Smart Contract Details](#smart-contract-details)
6. [Frontend Architecture](#frontend-architecture)
7. [Web3 Integration](#web3-integration)
8. [Security Considerations](#security-considerations)
9. [Development Guide](#development-guide)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

### What is Web3 CrowdFunding?

Web3 CrowdFunding is a **decentralized crowdfunding platform** built on the Ethereum blockchain. Unlike traditional crowdfunding platforms (like Kickstarter or GoFundMe), this platform:

- **Eliminates intermediaries**: No central authority controls the funds
- **Ensures transparency**: All transactions are publicly visible on the blockchain
- **Provides immutability**: Campaign data cannot be altered once created
- **Guarantees security**: Smart contracts handle all fund transfers automatically

### Why Blockchain for Crowdfunding?

**Traditional Crowdfunding Problems:**
- High platform fees (5-10% of funds raised)
- Lack of transparency in fund usage
- Centralized control over funds
- Geographic restrictions
- Delayed fund transfers

**Blockchain Solutions:**
- Minimal transaction fees (only gas fees)
- Complete transparency of all transactions
- Decentralized fund management
- Global accessibility
- Instant fund transfers

---

## Core Concepts

### 1. Blockchain

**What is it?**
A blockchain is a distributed, immutable ledger that records transactions across a network of computers.

**Key Characteristics:**
- **Decentralized**: No single point of control
- **Immutable**: Once data is written, it cannot be changed
- **Transparent**: All transactions are publicly visible
- **Secure**: Cryptographic algorithms protect data

**In This Project:**
We use the Ethereum blockchain (Sepolia testnet) to store campaign data and process donations.

### 2. Smart Contracts

**What is it?**
A smart contract is a self-executing program stored on the blockchain that automatically enforces the terms of an agreement.

**Key Features:**
- **Autonomous**: Executes automatically when conditions are met
- **Trustless**: No need to trust a third party
- **Deterministic**: Same input always produces same output
- **Immutable**: Cannot be modified after deployment

**In This Project:**
Our `CrowdFunding.sol` smart contract manages:
- Campaign creation
- Donation processing
- Fund storage
- Donator tracking

### 3. Ethereum

**What is it?**
Ethereum is a blockchain platform that supports smart contracts and decentralized applications (dApps).

**Key Components:**
- **ETH**: The native cryptocurrency used for transactions
- **Gas**: The fee required to execute transactions
- **EVM**: Ethereum Virtual Machine that executes smart contracts
- **Accounts**: User addresses that can send/receive ETH

**In This Project:**
- We deploy our smart contract on Ethereum Sepolia testnet
- Users pay gas fees for creating campaigns and donating
- All campaign data is stored on Ethereum blockchain

### 4. Solidity

**What is it?**
Solidity is a programming language for writing smart contracts on Ethereum.

**Key Features:**
- **Statically typed**: Variable types must be declared
- **Contract-oriented**: Designed specifically for smart contracts
- **Inheritance**: Supports object-oriented programming
- **Libraries**: Reusable code modules

**In This Project:**
We use Solidity to write the `CrowdFunding` contract with functions for campaign management.

### 5. Web3

**What is it?**
Web3 refers to the decentralized internet built on blockchain technology.

**Web2 vs Web3:**

| Aspect | Web2 | Web3 |
|--------|------|------|
| Data Storage | Centralized servers | Distributed blockchain |
| Ownership | Platform owns data | Users own data |
| Authentication | Username/password | Wallet signatures |
| Payments | Credit cards, PayPal | Cryptocurrency |
| Trust | Trust the platform | Trust the code |

**In This Project:**
Our application is a Web3 dApp that interacts directly with the blockchain.

### 6. MetaMask

**What is it?**
MetaMask is a cryptocurrency wallet and gateway to blockchain applications.

**Key Functions:**
- **Wallet Management**: Store and manage ETH and tokens
- **Transaction Signing**: Approve blockchain transactions
- **Network Switching**: Connect to different Ethereum networks
- **dApp Connection**: Interact with Web3 applications

**In This Project:**
Users connect their MetaMask wallet to:
- Create campaigns (requires transaction signing)
- Make donations (requires ETH transfer)
- View their campaigns and donation history

### 7. Thirdweb SDK

**What is it?**
Thirdweb is a Web3 development framework that simplifies blockchain integration.

**Benefits:**
- **Easy Integration**: Pre-built hooks and components
- **Wallet Connection**: Built-in wallet connection UI
- **Contract Interaction**: Simplified contract calls
- **Type Safety**: TypeScript support

**In This Project:**
We use Thirdweb to:
- Connect to the deployed smart contract
- Handle wallet connections
- Execute contract functions
- Read blockchain data

### 8. Ethers.js

**What is it?**
Ethers.js is a JavaScript library for interacting with the Ethereum blockchain.

**Key Features:**
- **Wallet Management**: Create and manage wallets
- **Contract Interaction**: Call smart contract functions
- **Data Formatting**: Convert between ETH and Wei
- **Event Listening**: Monitor blockchain events

**In This Project:**
We use Ethers.js to:
- Format ETH amounts (Wei ↔ ETH conversion)
- Parse blockchain data
- Handle transaction responses

---

## System Architecture

### High-Level Architecture

Our application follows a **three-tier architecture**:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        PRESENTATION LAYER                           │
│                     (React + TypeScript + Vite)                     │
│                                                                     │
│  • User Interface Components                                       │
│  • Page Routing (React Router)                                     │
│  • State Management (Context API)                                  │
│  • Styling (TailwindCSS)                                           │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      INTEGRATION LAYER                              │
│                   (Thirdweb SDK + Ethers.js)                        │
│                                                                     │
│  • Wallet Connection (MetaMask)                                    │
│  • Smart Contract Interface                                        │
│  • Transaction Management                                          │
│  • Data Transformation                                             │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         DATA LAYER                                  │
│                  (Ethereum Blockchain - Sepolia)                    │
│                                                                     │
│  • Smart Contract Storage                                          │
│  • Transaction History                                             │
│  • Campaign Data                                                   │
│  • Donator Records                                                 │
└─────────────────────────────────────────────────────────────────────┘
```

### Detailed Component Architecture

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

---

## Technical Implementation

### Data Flow Diagrams

#### 1. Campaign Creation Flow

```
┌──────────┐
│   User   │
└────┬─────┘
     │ 1. Fills campaign form
     ▼
┌─────────────────────┐
│ Create Campaign Page│
└────┬────────────────┘
     │ 2. Submits form data
     ▼
┌─────────────────────┐
│  State Context      │
│  publishCampaign()  │
└────┬────────────────┘
     │ 3. Calls contract function
     ▼
┌─────────────────────┐
│   Thirdweb SDK      │
│  createCampaign()   │
└────┬────────────────┘
     │ 4. Requests transaction
     ▼
┌─────────────────────┐
│     MetaMask        │
└────┬────────────────┘
     │ 5. User confirms & signs
     ▼
┌─────────────────────┐
│  Smart Contract     │
│  createCampaign()   │
└────┬────────────────┘
     │ 6. Stores campaign data
     ▼
┌─────────────────────┐
│  Ethereum Blockchain│
└────┬────────────────┘
     │ 7. Transaction confirmed
     ▼
┌─────────────────────┐
│   UI Updated        │
│  Success Message    │
└─────────────────────┘
```

#### 2. Donation Flow

```
┌──────────┐
│   User   │
└────┬─────┘
     │ 1. Enters donation amount
     ▼
┌─────────────────────┐
│ Campaign Details    │
│  Donate Button      │
└────┬────────────────┘
     │ 2. Calls donate function
     ▼
┌─────────────────────┐
│  State Context      │
│     donate()        │
└────┬────────────────┘
     │ 3. Sends ETH with transaction
     ▼
┌─────────────────────┐
│   Thirdweb SDK      │
│ donateToCampaign()  │
└────┬────────────────┘
     │ 4. Requests transaction + ETH
     ▼
┌─────────────────────┐
│     MetaMask        │
└────┬────────────────┘
     │ 5. User confirms & sends ETH
     ▼
┌─────────────────────┐
│  Smart Contract     │
│ donateToCampaign()  │
└────┬────────────────┘
     │ 6. Updates campaign data
     │    - amountCollected += donation
     │    - donators.push(sender)
     │    - donations.push(amount)
     ▼
┌─────────────────────┐
│  Ethereum Blockchain│
└────┬────────────────┘
     │ 7. Transaction confirmed
     ▼
┌─────────────────────┐
│   UI Refreshed      │
│  - Fetch donators   │
│  - Show success     │
└─────────────────────┘
```

#### 3. Data Retrieval Flow

```
┌──────────┐
│   User   │
└────┬─────┘
     │ 1. Navigates to Home
     ▼
┌─────────────────────┐
│    Home Page        │
└────┬────────────────┘
     │ 2. useEffect triggers
     ▼
┌─────────────────────┐
│  State Context      │
│  getCampaigns()     │
└────┬────────────────┘
     │ 3. Calls contract read
     ▼
┌─────────────────────┐
│   Thirdweb SDK      │
│  contract.call()    │
└────┬────────────────┘
     │ 4. Reads blockchain data
     ▼
┌─────────────────────┐
│  Smart Contract     │
│  getCampaigns()     │
└────┬────────────────┘
     │ 5. Returns campaign array
     ▼
┌─────────────────────┐
│  State Context      │
│  Parse & Format     │
└────┬────────────────┘
     │ 6. Converts Wei to ETH
     │    Formats timestamps
     ▼
┌─────────────────────┐
│    Home Page        │
│  Display Cards      │
└─────────────────────┘
```

---

## Smart Contract Details

### Contract Structure

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;           // Campaign creator's address
        string title;           // Campaign title
        string description;     // Campaign description
        uint256 target;         // Funding goal in Wei
        uint256 deadline;       // Campaign end timestamp
        uint256 amountCollected;// Total funds raised
        string image;           // Campaign image URL
        address[] donators;     // Array of donator addresses
        uint256[] donations;    // Array of donation amounts
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public numberOfCampaigns = 0;

    // Functions...
}
```

### Key Functions Explained

#### 1. createCampaign()

**Purpose**: Creates a new crowdfunding campaign

**Parameters**:
- `_owner`: Address of campaign creator
- `_title`: Campaign title
- `_description`: Campaign description
- `_target`: Funding goal (in Wei)
- `_deadline`: Campaign end date (Unix timestamp)
- `_image`: URL to campaign image

**Process**:
1. Creates a new Campaign struct
2. Stores it in the campaigns mapping
3. Increments numberOfCampaigns counter
4. Returns the campaign ID

**Gas Cost**: ~200,000 - 300,000 gas (varies with data size)

```solidity
function createCampaign(
    address _owner,
    string memory _title,
    string memory _description,
    uint256 _target,
    uint256 _deadline,
    string memory _image
) public returns (uint256) {
    Campaign storage campaign = campaigns[numberOfCampaigns];
    
    require(campaign.deadline < block.timestamp, "Deadline should be in future");
    
    campaign.owner = _owner;
    campaign.title = _title;
    campaign.description = _description;
    campaign.target = _target;
    campaign.deadline = _deadline;
    campaign.amountCollected = 0;
    campaign.image = _image;
    
    numberOfCampaigns++;
    
    return numberOfCampaigns - 1;
}
```

#### 2. donateToCampaign()

**Purpose**: Allows users to donate ETH to a campaign

**Parameters**:
- `_id`: Campaign ID to donate to

**Process**:
1. Receives ETH with the transaction (msg.value)
2. Adds donator address to campaign's donators array
3. Adds donation amount to campaign's donations array
4. Updates amountCollected
5. Transfers ETH to campaign owner

**Gas Cost**: ~100,000 - 150,000 gas

**Security Features**:
- Validates campaign exists
- Ensures donation amount > 0
- Uses `call` for safe ETH transfer

```solidity
function donateToCampaign(uint256 _id) public payable {
    uint256 amount = msg.value;
    Campaign storage campaign = campaigns[_id];
    
    campaign.donators.push(msg.sender);
    campaign.donations.push(amount);
    
    (bool sent,) = payable(campaign.owner).call{value: amount}("");
    
    if(sent) {
        campaign.amountCollected += amount;
    }
}
```

#### 3. getDonators()

**Purpose**: Retrieves all donators and their donations for a campaign

**Parameters**:
- `_id`: Campaign ID

**Returns**:
- Array of donator addresses
- Array of donation amounts

**Use Case**: Display donator list on campaign details page

```solidity
function getDonators(uint256 _id) view public returns (
    address[] memory,
    uint256[] memory
) {
    return (campaigns[_id].donators, campaigns[_id].donations);
}
```

#### 4. getCampaigns()

**Purpose**: Retrieves all campaigns

**Returns**: Array of all Campaign structs

**Use Case**: Display all campaigns on home page

```solidity
function getCampaigns() public view returns (Campaign[] memory) {
    Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);
    
    for(uint i = 0; i < numberOfCampaigns; i++) {
        Campaign storage item = campaigns[i];
        allCampaigns[i] = item;
    }
    
    return allCampaigns;
}
```

### Storage Patterns

**Mapping vs Array**:
- We use `mapping(uint256 => Campaign)` for O(1) campaign lookups
- Campaign ID is the key (auto-incremented)
- More gas-efficient than searching arrays

**Dynamic Arrays**:
- `donators[]` and `donations[]` grow dynamically
- Each donation appends to both arrays
- Parallel arrays maintain donator-donation relationship

---

## Frontend Architecture

### State Management with Context API

**Why Context API?**
- Centralized state management
- Avoid prop drilling
- Share Web3 connection across components
- Single source of truth for blockchain data

**StateContext Structure**:

```typescript
interface ContextType {
  address: string | undefined;        // Connected wallet address
  contract: any;                      // Smart contract instance
  createCampaign: (form: any) => Promise<any>;
  connect: () => Promise<any>;        // Connect MetaMask
  getCampaigns: () => Promise<any>;   // Fetch all campaigns
  getUserCampaigns: () => Promise<any>; // Fetch user's campaigns
  getDonations: (pId: string) => Promise<any>; // Fetch donators
  donate: (pId: any, amount: any) => Promise<any>; // Make donation
}
```

### Component Breakdown

#### 1. Pages

**Home.tsx**
- Displays all active campaigns
- Filters campaigns by search query
- Uses `DisplayCampaigns` component
- Fetches campaigns on mount

**CreateCampaign.tsx**
- Form for creating new campaigns
- Validates input data
- Handles image URL input
- Calls `createCampaign` from context

**CampaignDetails.tsx**
- Shows detailed campaign information
- Displays progress bar
- Lists all donators
- Handles donation functionality
- **Bug Fix**: Properly handles campaign ID 0

**Profile.tsx**
- Shows user's created campaigns
- Filters campaigns by owner address
- Reuses `DisplayCampaigns` component

#### 2. Components

**Navbar.tsx**
- Wallet connection button
- Navigation links
- Displays connected address
- Search functionality

**Sidebar.tsx**
- Navigation menu
- Active route highlighting
- Responsive design

**FundCard.tsx**
- Campaign card display
- Shows campaign image, title, description
- Displays progress and deadline
- Click to view details

**CustomButton.tsx**
- Reusable button component
- Different styles (primary, secondary)
- Loading state support

**FormField.tsx**
- Reusable form input
- Supports text, number, textarea
- Label and placeholder support

**CountBox.tsx**
- Displays campaign statistics
- Used for: Days Left, Amount Raised, Total Backers
- Styled card layout

**Loader.tsx**
- Loading spinner
- Displayed during transactions
- Full-screen overlay

**SuccessModal.tsx**
- Success message after donation
- Auto-redirect to home
- Celebration UI

### Routing Structure

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/create-campaign" element={<CreateCampaign />} />
  <Route path="/campaign-details/:id" element={<CampaignDetails />} />
</Routes>
```

---

## Web3 Integration

### Thirdweb Setup

**Configuration**:

```typescript
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const App = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
      {/* App components */}
    </ThirdwebProvider>
  );
};
```

**Contract Connection**:

```typescript
const { contract } = useContract(
  import.meta.env.VITE_CONTRACT_ADDRESS as string
);
```

### Wallet Connection

**MetaMask Integration**:

```typescript
const connectWithMetamask = useMetamask();

const connect = async () => {
  try {
    await connectWithMetamask({
      chainId: 11155111, // Sepolia testnet
    });
  } catch (error) {
    console.error("Failed to connect:", error);
  }
};
```

**Address Retrieval**:

```typescript
const address = useAddress(); // Current connected wallet
```

### Contract Interactions

#### Writing to Blockchain (Transactions)

**Creating a Campaign**:

```typescript
const { mutateAsync: createCampaign } = useContractWrite(
  contract,
  "createCampaign"
);

const publishCampaign = async (form: any) => {
  const data = await createCampaign({
    args: [
      address,                              // owner
      form.title,                           // title
      form.description,                     // description
      form.target,                          // target (in Wei)
      new Date(form.deadline).getTime(),    // deadline
      form.image,                           // image URL
    ],
  });
};
```

**Making a Donation**:

```typescript
const donate = async (pId: any, amount: any) => {
  const data = await contract.call("donateToCampaign", [pId], {
    value: ethers.utils.parseEther(amount.toString()),
  });
};
```

#### Reading from Blockchain (Queries)

**Fetching Campaigns**:

```typescript
const getCampaigns = async () => {
  const campaigns = await contract?.call("getCampaigns");
  
  const parsedCampaigns = campaigns.map((campaign: any, index: number) => ({
    owner: campaign.owner,
    title: campaign.title,
    description: campaign.description,
    target: ethers.utils.formatEther(campaign.target.toString()),
    deadline: campaign.deadline.toNumber(),
    amountCollected: ethers.utils.formatEther(
      campaign.amountCollected.toString()
    ),
    image: campaign.image,
    pId: index,
  }));
  
  return parsedCampaigns;
};
```

**Fetching Donators**:

```typescript
const getDonations = async (pId: any) => {
  const donations = await contract.call('getDonators', [pId]);
  const numberOfDonations = donations[0].length;
  
  const parsedDonations = [];
  
  for (let i = 0; i < numberOfDonations; i++) {
    parsedDonations.push({
      donator: donations[0][i],
      donation: ethers.utils.formatEther(donations[1][i].toString())
    });
  }
  
  return parsedDonations;
};
```

### Data Transformation

**Wei to ETH Conversion**:

```typescript
// Wei is the smallest unit of ETH
// 1 ETH = 1,000,000,000,000,000,000 Wei (10^18)

// Convert Wei to ETH
const ethAmount = ethers.utils.formatEther(weiAmount);

// Convert ETH to Wei
const weiAmount = ethers.utils.parseEther(ethAmount);
```

**Timestamp Handling**:

```typescript
// Convert Date to Unix timestamp (seconds)
const timestamp = new Date(dateString).getTime();

// Calculate days left
const daysLeft = (deadline: number) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);
  return remainingDays.toFixed(0);
};
```

---

## Security Considerations

### Smart Contract Security

**1. Reentrancy Protection**
- Use `.call()` instead of `.transfer()` for ETH transfers
- Update state before external calls
- Consider using OpenZeppelin's ReentrancyGuard

**2. Access Control**
- Only campaign owner should receive funds
- Validate campaign ID exists
- Check deadline hasn't passed

**3. Integer Overflow/Underflow**
- Solidity 0.8+ has built-in overflow protection
- No need for SafeMath library

**4. Input Validation**
```solidity
require(campaign.deadline > block.timestamp, "Deadline must be in future");
require(msg.value > 0, "Donation must be greater than 0");
```

### Frontend Security

**1. Environment Variables**
- Never commit private keys
- Use `.env` for sensitive data
- Validate contract address

**2. User Input Validation**
```typescript
if (!amount || parseFloat(amount) <= 0) {
  alert("Please enter a valid donation amount.");
  return;
}
```

**3. Transaction Verification**
- Show transaction details before signing
- Display gas estimates
- Confirm success/failure

**4. Error Handling**
```typescript
try {
  await donate(pId, amount);
} catch (error) {
  console.error("Donation failed:", error);
  alert("Transaction failed. Please try again.");
}
```

### Best Practices

**1. Gas Optimization**
- Use `view` functions for read-only operations
- Batch operations when possible
- Minimize storage writes

**2. User Experience**
- Show loading states during transactions
- Display clear error messages
- Provide transaction links (Etherscan)

**3. Testing**
- Test on testnet before mainnet
- Verify contract on Etherscan
- Audit smart contracts

---

## Development Guide

### Setting Up Development Environment

**1. Install Dependencies**

```bash
# Frontend
cd client
npm install

# Smart Contracts
cd ../web3
npm install
```

**2. Configure Environment**

Create `client/.env`:
```env
VITE_CONTRACT_ADDRESS=0x... # Your deployed contract address
```

**3. Run Development Server**

```bash
cd client
npm run dev
```

**4. Compile Smart Contracts**

```bash
cd web3
npx hardhat compile
```

**5. Deploy to Testnet**

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Development Workflow

**1. Smart Contract Development**
- Write contract in `web3/contracts/`
- Compile with Hardhat
- Test locally with Hardhat Network
- Deploy to Sepolia testnet
- Verify on Etherscan

**2. Frontend Development**
- Create/modify components in `client/src/components/`
- Update pages in `client/src/pages/`
- Add context functions in `client/src/context/`
- Test with local dev server
- Connect to deployed contract

**3. Testing Strategy**
- Unit test smart contracts
- Integration test contract interactions
- Manual UI testing
- Test on different wallets
- Test edge cases (0 donations, expired campaigns)

### Common Development Tasks

**Add a New Contract Function**:

1. Update `CrowdFunding.sol`:
```solidity
function newFunction() public {
    // Implementation
}
```

2. Recompile and redeploy contract

3. Update context in `client/src/context/index.tsx`:
```typescript
const newFunction = async () => {
  const data = await contract.call('newFunction');
  return data;
};
```

4. Use in components:
```typescript
const { newFunction } = useStateContext();
```

**Add a New Page**:

1. Create `client/src/pages/NewPage.tsx`
2. Add route in `App.tsx`:
```typescript
<Route path="/new-page" element={<NewPage />} />
```
3. Add navigation link in Sidebar

---

## Troubleshooting

### Common Issues and Solutions

#### 1. MetaMask Not Connecting

**Problem**: Wallet connection fails

**Solutions**:
- Ensure MetaMask is installed
- Check if on correct network (Sepolia)
- Refresh page and try again
- Clear browser cache

#### 2. Transaction Failing

**Problem**: Transactions revert or fail

**Solutions**:
- Check gas limit is sufficient
- Verify contract address is correct
- Ensure wallet has enough ETH for gas
- Check deadline hasn't passed
- Verify input data is valid

#### 3. Campaign ID 0 Not Working

**Problem**: Campaign with ID 0 shows "No donators"

**Solution**: ✅ **Fixed!**
- Changed `if (!pId)` to `if (pId === undefined || pId === null)`
- JavaScript treats 0 as falsy, causing validation to fail
- Now properly handles numeric ID 0

#### 4. Data Not Loading

**Problem**: Campaigns or donators not displaying

**Solutions**:
- Check contract is deployed
- Verify contract address in `.env`
- Ensure connected to correct network
- Check browser console for errors
- Verify contract has data

#### 5. Gas Estimation Failed

**Problem**: Transaction gas estimation fails

**Solutions**:
- Check function will not revert
- Verify all requirements will pass
- Ensure sufficient ETH balance
- Try increasing gas limit manually

### Debugging Tips

**1. Browser Console**
- Check for JavaScript errors
- View contract call logs
- Monitor state changes

**2. MetaMask**
- View transaction history
- Check pending transactions
- Verify network selection

**3. Etherscan**
- View contract transactions
- Check contract state
- Verify deployment

**4. Hardhat Console**
```bash
npx hardhat console --network sepolia
```

---

## Glossary

**dApp**: Decentralized Application - runs on blockchain instead of centralized servers

**Gas**: Fee required to execute transactions on Ethereum

**Wei**: Smallest unit of ETH (1 ETH = 10^18 Wei)

**Testnet**: Test blockchain network for development (e.g., Sepolia)

**Mainnet**: Main Ethereum blockchain with real value

**ABI**: Application Binary Interface - defines how to interact with smart contract

**Wallet**: Software that stores private keys and manages cryptocurrency

**Private Key**: Secret key that controls a wallet (never share!)

**Public Address**: Wallet address that can be shared publicly

**Transaction**: Any operation that changes blockchain state

**Block**: Group of transactions added to blockchain

**Confirmation**: Number of blocks added after your transaction

**Smart Contract**: Self-executing code on blockchain

**Solidity**: Programming language for Ethereum smart contracts

**EVM**: Ethereum Virtual Machine - executes smart contracts

---

## Additional Resources

### Documentation
- [Ethereum Documentation](https://ethereum.org/en/developers/docs/)
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Thirdweb Documentation](https://portal.thirdweb.com/)
- [Ethers.js Documentation](https://docs.ethers.org/)
- [React Documentation](https://react.dev/)

### Tools
- [Remix IDE](https://remix.ethereum.org/) - Online Solidity IDE
- [Hardhat](https://hardhat.org/) - Ethereum development environment
- [Etherscan](https://sepolia.etherscan.io/) - Blockchain explorer
- [Sepolia Faucet](https://sepoliafaucet.com/) - Get test ETH

### Learning Resources
- [CryptoZombies](https://cryptozombies.io/) - Learn Solidity
- [Ethereum.org Tutorials](https://ethereum.org/en/developers/tutorials/)
- [Web3 University](https://www.web3.university/)

---

## Conclusion

This Web3 CrowdFunding platform demonstrates the power of blockchain technology in creating transparent, decentralized applications. By eliminating intermediaries and leveraging smart contracts, we've built a trustless crowdfunding system that gives users complete control over their campaigns and donations.

**Key Takeaways**:
- Smart contracts automate fund management
- Blockchain ensures transparency and immutability
- Web3 technologies enable decentralized applications
- MetaMask provides secure wallet integration
- Thirdweb simplifies blockchain development

**Future Enhancements**:
- Add campaign categories and tags
- Implement milestone-based funding
- Add campaign updates from creators
- Enable campaign comments
- Support multiple cryptocurrencies
- Add campaign verification system
- Implement refund mechanism for failed campaigns

---

**Built with ❤️ by Tushar Mishra**

For questions or contributions, visit: [GitHub Repository](https://github.com/tusharmishra069/Web3-CrowdFunding)

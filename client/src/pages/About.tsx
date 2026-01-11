import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center py-[60px] px-4">
                <h1 className="font-epilogue font-bold text-[52px] text-white text-center leading-[60px]">
                    About Web3 CrowdFunding
                </h1>
                <p className="mt-[20px] font-epilogue font-normal text-[20px] text-[#808191] text-center max-w-[800px]">
                    Empowering creators and supporters through decentralized, transparent, and secure crowdfunding on the blockchain
                </p>
            </div>

            {/* What is Crowdfunding Section */}
            <div className="bg-[#1c1c24] rounded-[10px] p-8 mb-8">
                <h2 className="font-epilogue font-semibold text-[32px] text-white mb-6">
                    What is Crowdfunding?
                </h2>
                <div className="space-y-4">
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px]">
                        Crowdfunding is a method of raising capital through the collective effort of friends, family, customers, and individual investors. This approach taps into the collective efforts of a large pool of individuals—primarily online via social media and crowdfunding platforms—and leverages their networks for greater reach and exposure.
                    </p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px]">
                        Traditional crowdfunding platforms like Kickstarter and GoFundMe have helped thousands of projects come to life. However, they come with limitations: high fees, geographic restrictions, centralized control, and lack of transparency in fund management.
                    </p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px]">
                        <span className="text-[#4acd8d] font-semibold">Web3 CrowdFunding</span> takes this concept to the next level by leveraging blockchain technology to create a decentralized, transparent, and trustless crowdfunding ecosystem.
                    </p>
                </div>
            </div>

            {/* What Does It Do Section */}
            <div className="bg-[#1c1c24] rounded-[10px] p-8 mb-8">
                <h2 className="font-epilogue font-semibold text-[32px] text-white mb-6">
                    What Does Web3 CrowdFunding Do?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#13131a] rounded-[10px] p-6">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex items-center justify-center mb-4">
                            <span className="text-[24px]">🚀</span>
                        </div>
                        <h3 className="font-epilogue font-semibold text-[20px] text-white mb-3">
                            Launch Campaigns
                        </h3>
                        <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                            Create crowdfunding campaigns with custom goals, deadlines, and descriptions. Share your vision with the world and attract supporters who believe in your project.
                        </p>
                    </div>

                    <div className="bg-[#13131a] rounded-[10px] p-6">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex items-center justify-center mb-4">
                            <span className="text-[24px]">💎</span>
                        </div>
                        <h3 className="font-epilogue font-semibold text-[20px] text-white mb-3">
                            Secure Donations
                        </h3>
                        <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                            Support campaigns using cryptocurrency (ETH). All donations are processed through smart contracts, ensuring security and transparency without intermediaries.
                        </p>
                    </div>

                    <div className="bg-[#13131a] rounded-[10px] p-6">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex items-center justify-center mb-4">
                            <span className="text-[24px]">🔍</span>
                        </div>
                        <h3 className="font-epilogue font-semibold text-[20px] text-white mb-3">
                            Complete Transparency
                        </h3>
                        <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                            Every transaction is recorded on the blockchain. View all donations, donators, and fund transfers in real-time. No hidden fees, no black boxes.
                        </p>
                    </div>

                    <div className="bg-[#13131a] rounded-[10px] p-6">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex items-center justify-center mb-4">
                            <span className="text-[24px]">🌍</span>
                        </div>
                        <h3 className="font-epilogue font-semibold text-[20px] text-white mb-3">
                            Global Access
                        </h3>
                        <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                            No geographic restrictions. Anyone with a crypto wallet can create or support campaigns from anywhere in the world, breaking down traditional barriers.
                        </p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-[#1c1c24] rounded-[10px] p-8 mb-8">
                <h2 className="font-epilogue font-semibold text-[32px] text-white mb-6">
                    How Does It Work?
                </h2>

                <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#8c6dfd] flex items-center justify-center">
                                <span className="font-epilogue font-bold text-[20px] text-white">1</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-epilogue font-semibold text-[20px] text-white mb-2">
                                Connect Your Wallet
                            </h3>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                                Install MetaMask (a cryptocurrency wallet) and connect it to our platform. This wallet will be used to create campaigns and make donations. You'll need some ETH on the Sepolia testnet to get started.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#8c6dfd] flex items-center justify-center">
                                <span className="font-epilogue font-bold text-[20px] text-white">2</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-epilogue font-semibold text-[20px] text-white mb-2">
                                Create or Browse Campaigns
                            </h3>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px] mb-3">
                                <span className="text-[#4acd8d] font-semibold">For Creators:</span> Click "Create Campaign" and fill in your project details—title, description, funding goal (in ETH), deadline, and an image. When you submit, MetaMask will ask you to sign a transaction that creates your campaign on the blockchain.
                            </p>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                                <span className="text-[#4acd8d] font-semibold">For Supporters:</span> Browse the home page to discover active campaigns. Click on any campaign card to view full details, including the creator's address, funding progress, and all previous donations.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#8c6dfd] flex items-center justify-center">
                                <span className="font-epilogue font-bold text-[20px] text-white">3</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-epilogue font-semibold text-[20px] text-white mb-2">
                                Make a Donation
                            </h3>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                                On a campaign details page, enter the amount you want to donate (in ETH) and click "Fund Campaign". MetaMask will prompt you to confirm the transaction. Once confirmed, your donation is instantly sent to the campaign creator, and you'll be added to the list of donators.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#8c6dfd] flex items-center justify-center">
                                <span className="font-epilogue font-bold text-[20px] text-white">4</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-epilogue font-semibold text-[20px] text-white mb-2">
                                Track Progress
                            </h3>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                                All campaign data is stored on the blockchain. You can see real-time updates on funding progress, total backers, days remaining, and a complete list of all donators and their contributions. Everything is transparent and verifiable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Behind It Section */}
            <div className="bg-[#1c1c24] rounded-[10px] p-8 mb-8">
                <h2 className="font-epilogue font-semibold text-[32px] text-white mb-6">
                    The Technology Behind It
                </h2>
                <div className="space-y-4">
                    <div className="bg-[#13131a] rounded-[10px] p-4">
                        <h3 className="font-epilogue font-semibold text-[18px] text-[#4acd8d] mb-2">
                            🔗 Blockchain (Ethereum)
                        </h3>
                        <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                            A decentralized, immutable ledger that records all transactions. Once data is written to the blockchain, it cannot be altered, ensuring permanent transparency.
                        </p>
                    </div>

                    <div className="bg-[#13131a] rounded-[10px] p-4">
                        <h3 className="font-epilogue font-semibold text-[18px] text-[#4acd8d] mb-2">
                            📜 Smart Contracts (Solidity)
                        </h3>
                        <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                            Self-executing programs on the blockchain that automatically manage campaign creation, donations, and fund transfers. No intermediaries needed—the code enforces the rules.
                        </p>
                    </div>

                    <div className="bg-[#13131a] rounded-[10px] p-4">
                        <h3 className="font-epilogue font-semibold text-[18px] text-[#4acd8d] mb-2">
                            👛 MetaMask Wallet
                        </h3>
                        <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                            A cryptocurrency wallet that stores your ETH and allows you to interact with blockchain applications. It signs transactions to prove you authorize them.
                        </p>
                    </div>

                    <div className="bg-[#13131a] rounded-[10px] p-4">
                        <h3 className="font-epilogue font-semibold text-[18px] text-[#4acd8d] mb-2">
                            ⚡ Thirdweb SDK
                        </h3>
                        <p className="font-epilogue font-normal text-[14px] text-[#808191] leading-[22px]">
                            A Web3 development framework that simplifies blockchain integration, making it easy to connect wallets and interact with smart contracts.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Web3 Section */}
            <div className="bg-[#1c1c24] rounded-[10px] p-8 mb-8">
                <h2 className="font-epilogue font-semibold text-[32px] text-white mb-6">
                    Why Choose Web3 CrowdFunding?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <span className="text-[#4acd8d] text-[20px]">✓</span>
                        <div>
                            <h4 className="font-epilogue font-semibold text-[16px] text-white mb-1">No Platform Fees</h4>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191]">Only pay minimal gas fees for blockchain transactions</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-[#4acd8d] text-[20px]">✓</span>
                        <div>
                            <h4 className="font-epilogue font-semibold text-[16px] text-white mb-1">Instant Transfers</h4>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191]">Funds go directly to creators immediately</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-[#4acd8d] text-[20px]">✓</span>
                        <div>
                            <h4 className="font-epilogue font-semibold text-[16px] text-white mb-1">Complete Transparency</h4>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191]">All transactions visible on the blockchain</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-[#4acd8d] text-[20px]">✓</span>
                        <div>
                            <h4 className="font-epilogue font-semibold text-[16px] text-white mb-1">No Censorship</h4>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191]">Decentralized platform with no central authority</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-[#4acd8d] text-[20px]">✓</span>
                        <div>
                            <h4 className="font-epilogue font-semibold text-[16px] text-white mb-1">Global Accessibility</h4>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191]">Anyone, anywhere can participate</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-[#4acd8d] text-[20px]">✓</span>
                        <div>
                            <h4 className="font-epilogue font-semibold text-[16px] text-white mb-1">Trustless System</h4>
                            <p className="font-epilogue font-normal text-[14px] text-[#808191]">Smart contracts enforce rules automatically</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#8c6dfd] to-[#4acd8d] rounded-[10px] p-8 text-center">
                <h2 className="font-epilogue font-bold text-[32px] text-white mb-4">
                    Ready to Get Started?
                </h2>
                <p className="font-epilogue font-normal text-[18px] text-white mb-6 max-w-[600px] mx-auto">
                    Join the future of crowdfunding. Create your campaign or support projects you believe in.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <CustomButton
                        btnType="button"
                        title="Create Campaign"
                        styles="bg-[#1c1c24] hover:bg-[#2c2f32]"
                        handleClick={() => navigate('/create-campaign')}
                    />
                    <CustomButton
                        btnType="button"
                        title="Browse Campaigns"
                        styles="bg-white text-[#1c1c24] hover:bg-[#f0f0f0]"
                        handleClick={() => navigate('/')}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

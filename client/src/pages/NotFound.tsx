import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center max-w-[600px] px-4">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <h1 className="font-epilogue font-bold text-[120px] text-[#8c6dfd] leading-none">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <h2 className="font-epilogue font-bold text-[32px] text-white text-center mb-4">
                    Page Not Found
                </h2>

                <p className="font-epilogue font-normal text-[18px] text-[#808191] text-center mb-8">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 flex-wrap justify-center">
                    <CustomButton
                        btnType="button"
                        title="Go to Home"
                        styles="bg-[#8c6dfd] hover:bg-[#7c5ded]"
                        handleClick={() => navigate('/')}
                    />
                    <CustomButton
                        btnType="button"
                        title="Create Campaign"
                        styles="bg-[#1c1c24] hover:bg-[#2c2f32]"
                        handleClick={() => navigate('/create-campaign')}
                    />
                </div>

                {/* Helpful Links */}
                <div className="mt-12 w-full">
                    <p className="font-epilogue font-semibold text-[16px] text-white text-center mb-4">
                        You might be looking for:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="px-4 py-2 bg-[#1c1c24] text-[#4acd8d] rounded-[10px] font-epilogue font-medium text-[14px] hover:bg-[#2c2f32] transition-all"
                        >
                            Browse Campaigns
                        </button>
                        <button
                            onClick={() => navigate('/profile')}
                            className="px-4 py-2 bg-[#1c1c24] text-[#4acd8d] rounded-[10px] font-epilogue font-medium text-[14px] hover:bg-[#2c2f32] transition-all"
                        >
                            My Profile
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="px-4 py-2 bg-[#1c1c24] text-[#4acd8d] rounded-[10px] font-epilogue font-medium text-[14px] hover:bg-[#2c2f32] transition-all"
                        >
                            About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

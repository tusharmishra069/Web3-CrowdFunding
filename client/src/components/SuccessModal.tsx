import React from 'react';

interface SuccessModalProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#1c1c24] rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-[#3a3a43] animate-slideUp">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#4acd8d] to-[#1dc071] rounded-full flex items-center justify-center animate-scaleIn">
                        <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-2xl font-epilogue font-bold text-white text-center mb-3">
                    Success!
                </h2>
                <p className="text-[#808191] font-epilogue text-center mb-6 leading-relaxed">
                    {message}
                </p>

                {/* Progress indicator */}
                <div className="mb-6">
                    <div className="w-full h-1 bg-[#3a3a43] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#4acd8d] to-[#1dc071] animate-progress"></div>
                    </div>
                    <p className="text-[#808191] text-sm text-center mt-2 font-epilogue">
                        Redirecting to home...
                    </p>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-[#4acd8d] to-[#1dc071] text-white font-epilogue font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;

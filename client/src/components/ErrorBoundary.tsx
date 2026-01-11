import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log error in development only
        if (import.meta.env.DEV) {
            console.error('ErrorBoundary caught an error:', error, errorInfo);
        }
    }

    handleReset = (): void => {
        this.setState({
            hasError: false,
            error: null,
        });
        // Reload the page to reset the app state
        window.location.href = '/';
    };

    render(): ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen flex items-center justify-center bg-[#13131a] p-4">
                    <div className="max-w-md w-full bg-[#1c1c24] rounded-[10px] p-8 text-center">
                        <div className="w-16 h-16 bg-[#f44336] rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-3xl">⚠️</span>
                        </div>

                        <h1 className="font-epilogue font-bold text-[24px] text-white mb-3">
                            Oops! Something went wrong
                        </h1>

                        <p className="font-epilogue font-normal text-[16px] text-[#808191] mb-6">
                            We encountered an unexpected error. Don't worry, your data is safe.
                            Please try refreshing the page.
                        </p>

                        {import.meta.env.DEV && this.state.error && (
                            <div className="mb-6 p-4 bg-[#13131a] rounded-[10px] text-left">
                                <p className="font-epilogue font-semibold text-[14px] text-[#f44336] mb-2">
                                    Error Details (Development Only):
                                </p>
                                <p className="font-epilogue font-normal text-[12px] text-[#808191] break-all">
                                    {this.state.error.message}
                                </p>
                            </div>
                        )}

                        <button
                            onClick={this.handleReset}
                            className="w-full py-3 px-4 bg-[#8c6dfd] text-white font-epilogue font-semibold text-[16px] rounded-[10px] hover:bg-[#7c5ded] transition-all"
                        >
                            Return to Home
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

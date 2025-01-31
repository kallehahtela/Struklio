import React from "react";
import Button from "./Button";

type HeroProps = {
    text: string;
    className?: string;
};

const Hero: React.FC<HeroProps> = ({ text, className }) => {
    const textParts = text.split('<br />');
    
    return (
        <div className="relative w-full flex flex-col items-center justify-center px-5 sm:px-10 lg:px-20 xl:px-32 pt-16 lg:pt-24">
            <div className="relative w-full max-w-4xl text-center">
                {/* Headline */}
                <p className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug ${className || ''}`}>
                    {textParts.map((part, index) => (
                        <span key={index}>
                            {part}
                            {index < textParts.length - 1 && <br />}
                        </span>
                    ))}
                </p>

                {/* Subtext */}
                <div className="pt-6 sm:pt-8">
                    <p className="text-base sm:text-lg md:text-xl px-5">
                        Stop waiting for developers. Start building your own full-stack web apps today - faster and easier than ever.
                    </p>
                </div>

                {/* Call to Action Button */}
                <div className="mt-6 sm:mt-8">
                    <Button title="Get Started" />
                </div>

                {/* Small Info Text */}
                <p className="text-center text-xs sm:text-sm pt-3">
                    Start for free. No credit card required.
                </p>
            </div>
        </div>
    );
};

export default Hero;

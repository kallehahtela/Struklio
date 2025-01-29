import React from "react";
import Button from "./Button";

type HeroProps = {
    text: string;
    className?: string;
};

const Hero:React.FC<HeroProps> = ({ text, className }) => {
    const textParts = text.split('<br />');
    
    return (
        <div className="relative w-full flex flex-col items-center justify-center pt-20">
            <div className="relative w-9/10">
                <p className={`text-3xl font-semibold text-center ${className || ''}`}>
                    {textParts.map((part, index) => (
                        <span key={index}>
                            {part}
                            {index < textParts.length - 1 && <br />}
                        </span>
                    ))}
                </p>

                <div className="pt-5">
                    <p className="text-center px-5">
                        Stop waiting for developers. Start building your own full-stack web apps today - faster and easier than ever.
                    </p>
                </div>

                <Button
                    title="Get Started"
                />
                <p className="text-center text-xs pt-2">
                    Start for free. No credit card required
                </p>
            </div>
        </div>
    );
};

export default Hero
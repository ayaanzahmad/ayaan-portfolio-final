"use client";

export default function DecorativeDivider() {
    return (
        <div className="w-full flex items-center justify-center my-8">
            <svg
                viewBox="0 0 400 40"
                className="w-full max-w-md"
                fill="none"
            >
                {/* Left flourish */}
                <path
                    d="M20,20 Q60,10 100,20"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    fill="none"
                />
                <circle cx="40" cy="15" r="2" fill="#EAEAEA" />
                <circle cx="80" cy="15" r="2" fill="#EAEAEA" />

                {/* Center ornament */}
                <circle cx="200" cy="20" r="5" fill="#EAEAEA" />
                <circle cx="200" cy="20" r="8" stroke="#FFD700" strokeWidth="1" fill="none" />
                <circle cx="200" cy="20" r="12" stroke="#EAEAEA" strokeWidth="0.5" fill="none" opacity="0.5" />

                {/* Center lines */}
                <line x1="120" y1="20" x2="180" y2="20" stroke="#EAEAEA" strokeWidth="1" />
                <line x1="220" y1="20" x2="280" y2="20" stroke="#EAEAEA" strokeWidth="1" />

                {/* Right flourish */}
                <path
                    d="M300,20 Q340,10 380,20"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    fill="none"
                />
                <circle cx="320" cy="15" r="2" fill="#EAEAEA" />
                <circle cx="360" cy="15" r="2" fill="#EAEAEA" />
            </svg>
        </div>
    );
}

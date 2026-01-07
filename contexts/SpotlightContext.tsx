"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SpotlightContextType {
    isHidden: boolean;
    setIsHidden: (hidden: boolean) => void;
}

const SpotlightContext = createContext<SpotlightContextType | undefined>(undefined);

export function SpotlightProvider({ children }: { children: ReactNode }) {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <SpotlightContext.Provider value={{ isHidden, setIsHidden }}>
            {children}
        </SpotlightContext.Provider>
    );
}

export function useSpotlight() {
    const context = useContext(SpotlightContext);
    if (!context) {
        throw new Error("useSpotlight must be used within SpotlightProvider");
    }
    return context;
}

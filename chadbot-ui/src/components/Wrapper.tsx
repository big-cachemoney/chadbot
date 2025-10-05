import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8 my-8 sm:my-16">
            {children}
        </div>
    );
}
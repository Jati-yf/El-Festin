import React, { type ReactNode } from 'react';
import './SlideWrapper.css'; // Aquí metes tu @keyframes fadeIn y el .slide-container

interface SlideWrapperProps {
    children: ReactNode;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children }) => {
    return (
        <section className="slide-container">
            {children}
        </section>
    );
};
import React, { useState, useEffect, useCallback } from 'react';
import { Frame } from './components/Frame';
import { SlideIntro } from './views/SlidesIntro';
import { SlideBracket } from './views/SlideBracket';
import { SlideRules } from './views/SlideRules';
import './styles/global.css';
import { SlideSignature } from './views/SlideSignature';

// Centralizamos las vistas en un array
const views = [
    <SlideIntro key="intro" />,
    <SlideBracket key="bracket" />,
    <SlideRules key="rules" />,
    <SlideSignature key="signature" />
    // ... añade el resto aquí
];

const App: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => Math.min(prev + 1, views.length - 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <main style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <Frame />
            {/* Renderizamos solo la vista activa */}
            {views[currentIndex]}

            {/* Flecha izquierda */}
            <button
                onClick={prevSlide}
                aria-label="Diapositiva anterior"
                className={`nav-arrow nav-arrow--prev${currentIndex === 0 ? ' nav-arrow--disabled' : ''}`}
            >
                <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            {/* Flecha derecha */}
            <button
                onClick={nextSlide}
                aria-label="Diapositiva siguiente"
                className={`nav-arrow nav-arrow--next${currentIndex === views.length - 1 ? ' nav-arrow--disabled' : ''}`}
            >
                <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>
        </main>
    );
};

export default App;
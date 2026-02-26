import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

// Definimos la estructura de nuestros datos para tener tipado fuerte
interface BracketStep {
    id: string;
    numeral: string;
    title: string;
    desc: string;
    isActive?: boolean;
}

// Separamos la lógica de presentación de los datos puros
const tournamentSteps: BracketStep[] = [
    { id: 'step-1', numeral: 'I', title: 'Aspirantes', desc: 'Duelos iniciales igualados.' },
    { id: 'step-2', numeral: 'II', title: 'Ascenso', desc: 'Superando la garganta.' },
    { id: 'step-3', numeral: 'III', title: 'Gourmet', desc: 'La gran final espera arriba.', isActive: true },
];

export const SlideBracket: React.FC = () => {
    return (
        <SlideWrapper>
            <h2>La Cadena Alimenticia</h2>
            <div className="content-box">
                <p style={{ marginBottom: '30px' }}>
                    Nuestro torneo utiliza un <strong>Bracket Escalado</strong>. Los peces pequeños luchan primero para ganar el derecho de desafiar a los depredadores ápice.
                </p>
                
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    {tournamentSteps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            {/* El contenedor del paso individual */}
                            <div className={`step ${step.isActive ? 'active' : ''}`} style={{ flex: 1, textAlign: 'center' }}>
                                <div className="step-circle">{step.numeral}</div>
                                <h4>{step.title}</h4>
                                <p style={{ fontSize: '12px' }}>{step.desc}</p>
                            </div>
                            
                            {/* Renderizamos el separador (flecha) solo si NO es el último elemento */}
                            {index < tournamentSteps.length - 1 && (
                                <div style={{ fontSize: '24px', color: 'var(--gold)', opacity: 0.5 }}>
                                    <i className="fa-solid fa-angles-right"></i>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
};
import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

export const SlideSignature: React.FC = () => {
    // Manejamos el estado de la firma localmente
    const [isSigned, setIsSigned] = useState(false);

    return (
        <SlideWrapper>
            <h1>Firma el Contrato</h1>
            <div style={{ height: '4px', width: '250px', background: 'var(--gold)', margin: '30px auto' }}></div>
            <p>Al sellar este trato, aceptas que el hambre es la única ley.</p>
            
            <div 
                onClick={() => setIsSigned(true)}
                style={{ 
                    border: '1px dashed var(--gold)', 
                    padding: '30px', 
                    cursor: isSigned ? 'default' : 'pointer', 
                    width: '100%', 
                    maxWidth: '400px', 
                    textAlign: 'center', 
                    marginTop: '20px',
                    background: isSigned ? 'rgba(17, 202, 160, 0.2)' : 'transparent',
                    transition: 'all 0.3s ease'
                }}
            >
                <p style={{ 
                    fontFamily: "'Cinzel Decorative'", 
                    color: isSigned ? 'var(--magic-cyan)' : 'var(--gold)', 
                    margin: 0,
                    fontWeight: isSigned ? 'bold' : 'normal'
                }}>
                    {isSigned ? "TRATO SELLADO" : "Haz clic para firmar"}
                </p>
            </div>
        </SlideWrapper>
    );
};
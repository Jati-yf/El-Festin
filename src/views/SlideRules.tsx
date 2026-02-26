import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { AdvantageCard } from '../components/AdvantageCard';

export const SlideRules: React.FC = () => {
    return (
        <SlideWrapper>
            <h2>Condiciones del Trato</h2>
            <div className="content-box">
                <div className="grid-3">
                    <AdvantageCard iconClass="fa-solid fa-skull" title="1ª Sangre">
                        La primera baja sella el destino del duelo inmediato.
                    </AdvantageCard>
                    
                    <AdvantageCard iconClass="fa-solid fa-utensils" title="100 Farm">
                        La disciplina en súbditos premia al comensal paciente.
                    </AdvantageCard>
                    
                    <AdvantageCard iconClass="fa-solid fa-chess-rook" title="1ª Torre">
                        Derrumba su refugio para reclamar el puente helado.
                    </AdvantageCard>
                </div>
            </div>
        </SlideWrapper>
    );
};
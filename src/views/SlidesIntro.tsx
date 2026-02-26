import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

export const SlideIntro: React.FC = () => {
    return (
        <SlideWrapper>
            <p className="badge">CONTRATO DE SANGRE Y AGUA</p>
            <h1>El Festín del <br/><span style={{ color: 'var(--magic-cyan)' }}>Rey del Río</span></h1>
            <p style={{ marginTop: '25px', fontStyle: 'italic', fontSize: '20px' }}>
                "Llamadme Tahm. Llamadme Rey. El nombre no importa... lo que importa es el trato."
            </p>
            <div className="divider"></div>
            <p>Bienvenidos al Abismo. Aquí, el hambre es la única ley.</p>
            <div className="nav-hint">Usa el ratón o las flechas para avanzar</div>
        </SlideWrapper>
    );
};
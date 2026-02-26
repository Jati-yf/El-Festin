import React, { type ReactNode } from 'react';

interface AdvantageCardProps {
    title: string;
    iconClass?: string;
    badge?: string;
    children: ReactNode;
}

export const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, iconClass, badge, children }) => {
    return (
        <div className="advantage-card">
            {badge && <span className="badge">{badge}</span>}
            {iconClass && <i className={iconClass} style={{ fontSize: '35px', color: 'var(--gold)', marginBottom: '10px' }}></i>}
            <h3>{title}</h3>
            {/* Renderizamos el texto u otros elementos que pasemos como hijo */}
            <div style={{ fontSize: '13px', marginTop: '10px' }}>
                {children}
            </div>
        </div>
    );
};
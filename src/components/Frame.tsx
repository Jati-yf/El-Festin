import React from 'react';

export const Frame: React.FC = () => {
    return (
        <div className="frame">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
        </div>
    );
};
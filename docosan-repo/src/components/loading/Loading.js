import React from 'react';
import './styles/loading.scss';

function Loading() {
    return (
        <div className="loading-box">
            <div className="loading" style={{ '--n': '5' }}>
                <div className="dot" style={{ '--i': '0' }} />
                <div className="dot" style={{ '--i': '1' }} />
                <div className="dot" style={{ '--i': '2' }} />
                <div className="dot" style={{ '--i': '3' }} />
                <div className="dot" style={{ '--i': '4' }} />
            </div>
        </div>
    );
}

export default Loading;
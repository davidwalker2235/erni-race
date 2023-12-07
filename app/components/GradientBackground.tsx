import React from 'react';

const Rays = () => {
    const rays = [];
    const numRays = 50; // Number of rays
    const innerRadius = 0; // Inner radius of rays
    const outerRadius = 50; // Outer radius of rays

    for (let i = 0; i < numRays; i++) {
        const angle = (i / numRays) * 2 * Math.PI;
        const x1 = 50 + innerRadius * Math.cos(angle);
        const y1 = 50 + innerRadius * Math.sin(angle);
        const x2 = 50 + outerRadius * Math.cos(angle);
        const y2 = 50 + outerRadius * Math.sin(angle);
        rays.push(<line x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.5" />);
    }

    return rays;
};

const GradientBackground = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: 'lightblue', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'darkblue', stopOpacity: 1 }} />
            </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#gradient)" />
        <Rays />
    </svg>
);

export default GradientBackground;
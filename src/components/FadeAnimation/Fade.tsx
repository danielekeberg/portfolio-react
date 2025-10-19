'use client';
import React, { useEffect, useState } from 'react';
import "./Fade.css";

interface FadeProps {
    children: React.ReactNode;
    dir?: 'up' | 'down' | 'left' | 'right';
}

const Fade: React.FC<FadeProps> = ({ children, dir = 'down' }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className={`fade fade-${dir} ${visible ? 'visible' : ''}`}>
            {children}
        </section>
    )
}

export default Fade;
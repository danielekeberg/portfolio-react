'use client';
import { useState, useEffect } from 'react';

function ScrollProgress() {
const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const total = scrollHeight - clientHeight;
            setProgress(total > 0 ? scrollTop / total : 0);
        }

    const onScroll = () => requestAnimationFrame(update);
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
    };
    }, []);

    return (
        <div className="h-1 w-full rounded-full bg-neutral-800/50 overflow-hidden">
            <div className="h-full origin-left bg-white opacity-40" style={{ transform: `scaleX(${progress})` }}></div>
        </div>
    )
}

export default ScrollProgress;
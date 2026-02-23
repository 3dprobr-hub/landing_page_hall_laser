import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const frameCount = 79; // ezgif-frame-002 to ezgif-frame-080

    // Preload images
    useEffect(() => {
        const loadedImages = [];
        let loadedCount = 0;

        const preload = async () => {
            const promises = [];
            for (let i = 2; i <= 80; i++) {
                const p = new Promise((resolve) => {
                    const img = new Image();
                    const frameStr = String(i).padStart(3, '0');
                    img.src = `/imagens/hero/ezgif-frame-${frameStr}.png`;
                    img.onload = () => {
                        loadedCount++;
                        resolve(img);
                    };
                    img.onerror = () => resolve(null);
                    loadedImages[i - 2] = img;
                });
                promises.push(p);
            }
            await Promise.all(promises);
            setImages(loadedImages.filter(img => img !== null));
            setIsLoading(false);
        };

        preload();
    }, []);

    // Animation Loop (Video simulation)
    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % images.length);
        }, 82); // ~12fps (half speed)

        return () => clearInterval(interval);
    }, [images]);

    // Draw to Canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        const img = images[currentFrame];

        const draw = () => {
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
            );
        };

        draw();
    }, [currentFrame, images]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background/Video Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-1" />

            {/* Content */}
            {/* Content removed to be placed below per user request */}

            {isLoading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </section>
    );
};

export default Hero;

import React, { useEffect, useRef } from 'react';

export default function AudioWaveBackground({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight || 500;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += 0.025;

      const width = canvas.width;
      const height = canvas.height;
      const midY = height * 0.55; // Vertical alignment footer content ke piche

      // 4 Ambient mathematical harmonic waves (Jarvis voice layer)
      const waves = [
        {
          frequency: 0.007,
          amplitude: 38,
          speed: 1.0,
          color: isDark ? 'rgba(34, 211, 238, 0.22)' : 'rgba(2, 132, 199, 0.25)',
          lineWidth: 1.4
        },
        {
          frequency: 0.012,
          amplitude: 26,
          speed: -0.75,
          color: isDark ? 'rgba(148, 163, 184, 0.18)' : 'rgba(100, 116, 139, 0.2)',
          lineWidth: 1.0
        },
        {
          frequency: 0.004,
          amplitude: 45,
          speed: 0.5,
          color: isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(14, 165, 233, 0.18)',
          lineWidth: 1.2
        },
        {
          frequency: 0.018,
          amplitude: 18,
          speed: 1.4,
          color: isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(79, 70, 229, 0.15)',
          lineWidth: 0.9
        }
      ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.lineWidth = w.lineWidth;
        ctx.strokeStyle = w.color;

        for (let x = 0; x < width; x++) {
          // Edges par gentle fade-out taaki hard borders na banein
          const edgeFactor = Math.sin((x / width) * Math.PI);
          const y = midY + Math.sin(x * w.frequency + step * w.speed) * w.amplitude * edgeFactor;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
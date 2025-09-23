"use client";
import React, { useRef, useEffect } from "react";

export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  className = "",
  particleColor = "#FFFFFF",
  speed = 0.5,
  id
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let numParticles = Math.floor((width * height) / particleDensity);

    function randomBetween(a, b) {
      return a + Math.random() * (b - a);
    }

    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: randomBetween(minSize, maxSize) * 8,
        alpha: randomBetween(0.5, 1),
        dx: randomBetween(-0.2, 0.2) * speed,
        dy: randomBetween(-0.2, 0.2) * speed,
        color: particleColor
      };
    }

    particles.current = Array.from({ length: numParticles }, createParticle);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (let p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          Object.assign(p, createParticle());
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animationRef.current);
  }, [minSize, maxSize, particleDensity, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background }}
      id={id}
    />
  );
}

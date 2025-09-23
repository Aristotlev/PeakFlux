'use client';

import { Inter } from 'next/font/google'
import ClientGalaxy from '../components/ClientGalaxy'
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PeakFlux Marketing - Digital Excellence</title>
        <meta name="description" content="Elevating brands through innovative digital strategies and creative solutions that drive real results." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/PeakFlux Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <ClientGalaxy 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />
        </div>
        {children}
      </body>
    </html>
  );
}

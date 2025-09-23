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
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/PeakFlux Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peakflux.com/" />
        <meta property="og:title" content="PeakFlux Marketing - Digital Excellence" />
        <meta property="og:description" content="Elevating brands through innovative digital strategies and creative solutions that drive real results." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="PeakFlux Marketing - Digital Excellence" />
        <meta property="og:site_name" content="PeakFlux Marketing" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://peakflux.com/" />
        <meta property="twitter:title" content="PeakFlux Marketing - Digital Excellence" />
        <meta property="twitter:description" content="Elevating brands through innovative digital strategies and creative solutions that drive real results." />
        <meta property="twitter:image" content="/og-image.png" />
        <meta property="twitter:image:alt" content="PeakFlux Marketing - Digital Excellence" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PeakFlux Marketing" />
        <meta name="keywords" content="digital marketing, brand strategy, creative solutions, marketing agency, digital excellence" />
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

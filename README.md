# Peakflux Marketing

A modern marketing website built with Next.js featuring an interactive dot grid background that responds to mouse movement and clicks.

## Features

- **Interactive Dot Grid Background**: A canvas-based background with dots that respond to mouse movement and clicks
- **GSAP Animations**: Smooth animations using GSAP and InertiaPlugin for physics-based interactions
- **Responsive Design**: Works across different screen sizes and devices
- **Modern Tech Stack**: Built with Next.js 14, React 18, and modern JavaScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## DotGrid Component Configuration

The DotGrid component accepts the following props:

- `dotSize`: Size of each dot (default: 16)
- `gap`: Gap between dots (default: 32)
- `baseColor`: Base color of dots (default: '#5227FF')
- `activeColor`: Color when dots are active/hover (default: '#5227FF')
- `proximity`: Distance for hover effects (default: 150)
- `speedTrigger`: Speed threshold for movement effects (default: 100)
- `shockRadius`: Radius for click shock effects (default: 250)
- `shockStrength`: Strength of click effects (default: 5)
- `maxSpeed`: Maximum speed for calculations (default: 5000)
- `resistance`: Physics resistance for animations (default: 750)
- `returnDuration`: Duration for dots to return to original position (default: 1.5)

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout component
│   └── page.js           # Home page with DotGrid background
├── components/
│   ├── DotGrid.js        # Interactive dot grid component
│   └── DotGrid.css       # Dot grid styles
├── package.json          # Project dependencies and scripts
└── next.config.js        # Next.js configuration
```

## Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: JavaScript library for building user interfaces
- **GSAP**: Professional-grade JavaScript animation library
- **Canvas API**: For rendering the interactive dot grid
- **CSS3**: Modern styling with flexbox and gradients

## Customization

You can customize the dot grid by modifying the props passed to the `DotGrid` component in `app/page.js`. The current configuration creates a purple dot grid with responsive interactions.

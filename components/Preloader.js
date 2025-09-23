'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import VaporizeTextCycle from './VaporizeTextCycle'

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Preloader duration - show for one animation cycle (about 3 seconds) then fade out
    const timer = setTimeout(() => {
      // Add fade-out class before hiding
      const preloaderElement = document.querySelector('.preloader-container')
      if (preloaderElement) {
        preloaderElement.classList.add('preloader-fade-out')
      }
      
      // Wait for fade animation to complete before calling onComplete
      setTimeout(() => {
        setIsVisible(false)
        onComplete()
      }, 300) // Match the CSS transition duration - faster fade
    }, 3000) // Total animation cycle time - 2x faster

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return null
  }

  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="preloader-logo">
          <div className="preloader-logo-wrapper">
            <Image
              src="/PeakFlux Logo.png"
              alt="PeakFlux Marketing"
              width={120}
              height={120}
              className="preloader-logo-image"
              priority
            />
          </div>
        </div>
        
        <VaporizeTextCycle
          texts={["PeakFlux"]}
          font={{
            fontFamily: "Inter, sans-serif",
            fontSize: "80px",
            fontWeight: 700
          }}
          color="rgb(255, 255, 255)"
          spread={5}
          density={4}
          animation={{
            vaporizeDuration: 1.5,
            fadeInDuration: 0.5,
            waitDuration: 0.25
          }}
          direction="left-to-right"
          alignment="center"
          tag="h1"
        />
      </div>
    </div>
  )
}

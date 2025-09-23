'use client'

import { useState } from 'react'

const HoverTextCycle = ({ 
  baseText = "PeakFlux Marketing Excellence",
  hoverWords = ["Innovation", "Excellence", "Success", "Growth"],
  speed = 2,
  className = "medium"
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`hover-text-cycle ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="base-text">
        {isHovered ? hoverWords[0] : baseText}
      </div>
    </div>
  )
}

export default HoverTextCycle

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '2349069530033'
const DEFAULT_MESSAGE = "Hi, I'd like to know more about Julicis Hotel & Suites."

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 1500)
    const hideTimer = setTimeout(() => setShowTooltip(false), 6000)
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {/* Tooltip */}
      <div
        style={{
          backgroundColor: '#ffffff',
          color: '#1a1a1a',
          padding: '10px 16px',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: '500',
          fontFamily: 'Cormorant Garamond, Times New Roman, serif',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          whiteSpace: 'nowrap',
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? 'translateX(0)' : 'translateX(10px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          pointerEvents: showTooltip ? 'auto' : 'none',
        }}
      >
        Chat with us on WhatsApp
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
          transition: 'transform 0.3s ease',
          flexShrink: 0,
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <FaWhatsapp size={32} color="#ffffff" />
      </a>
    </div>
  )
}

export default WhatsAppButton
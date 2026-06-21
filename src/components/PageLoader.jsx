import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const PageLoader = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {/* Top progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          backgroundColor: '#eab308',
          zIndex: 100000,
          width: loading ? '100%' : '0%',
          transition: loading
            ? 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            : 'width 0.2s ease, opacity 0.3s ease',
          opacity: loading ? 1 : 0,
        }}
      />

      {/* Full screen fade overlay with elegant loader */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#0f0f0f',
          zIndex: 99999,
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '90px',
            height: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Outer rotating ring */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(234,179,8,0.15)',
              borderTopColor: '#eab308',
              borderRightColor: '#eab308',
              animation: loading ? 'jul-spin 1.4s linear infinite' : 'none',
            }}
          />

          {/* Inner rotating ring, opposite direction, slower */}
          <div
            style={{
              position: 'absolute',
              inset: '14px',
              borderRadius: '50%',
              border: '1px solid rgba(234,179,8,0.1)',
              borderBottomColor: '#eab308',
              animation: loading ? 'jul-spin-reverse 2s linear infinite' : 'none',
            }}
          />

          {/* Center monogram */}
          <span
            style={{
              color: '#eab308',
              fontSize: '20px',
              fontWeight: '600',
              fontFamily: 'Playfair Display, Georgia, serif',
              letterSpacing: '0.05em',
              opacity: loading ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            J
          </span>
        </div>

        <style>{`
          @keyframes jul-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes jul-spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}</style>
      </div>
    </>
  )
}

export default PageLoader
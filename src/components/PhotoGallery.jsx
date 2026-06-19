import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const PhotoGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const openLightbox = (index) => setActiveIndex(index)
  const closeLightbox = () => setActiveIndex(null)

  const showPrev = (e) => {
    e.stopPropagation()
    setActiveIndex(prev => (prev - 1 + images.length) % images.length)
  }

  const showNext = (e) => {
    e.stopPropagation()
    setActiveIndex(prev => (prev + 1) % images.length)
  }

  return (
    <div style={{ padding: '100px 24px', backgroundColor: '#f9f9f7' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '12px' }}>
            <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
            <p style={{ fontStyle: 'italic', color: '#eab308', fontSize: '15px', fontWeight: '500', fontFamily: 'Cormorant Garamond, Times New Roman, serif', margin: 0 }}>
              Gallery
            </p>
            <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '600', color: '#1a1a1a', fontFamily: 'Playfair Display, Georgia, serif' }}>
            A Taste in Pictures
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                height: '220px',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <img
                src={img}
                alt={`Gallery item ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <X size={32} color="#ffffff" />
          </button>

          <button
            onClick={showPrev}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={40} color="#ffffff" />
          </button>

          <img
            src={images[activeIndex]}
            alt="Enlarged gallery item"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '85%',
              maxHeight: '85%',
              borderRadius: '8px',
              objectFit: 'contain',
            }}
          />

          <button
            onClick={showNext}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={40} color="#ffffff" />
          </button>

          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '13px',
              letterSpacing: '0.1em',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoGallery
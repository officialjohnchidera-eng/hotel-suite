const AboutSection = ({ heading, paragraph1, paragraph2, mainImage, overlapImage }) => {
  return (
    <div style={{ padding: '100px 24px', backgroundColor: '#ffffff' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            flex: '1 1 400px',
            minHeight: '600px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '90%',
              height: '480px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
            }}
          >
            <img
              src={mainImage}
              alt="Golden Bella Hotel Interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '70%',
              height: '300px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
              border: '6px solid #ffffff',
            }}
          >
            <img
              src={overlapImage}
              alt="Golden Bella Hotel Suite"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '20px',
              backgroundColor: '#eab308',
              color: '#000000',
              padding: '20px 24px',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(234,179,8,0.4)',
            }}
          >
            <div style={{ fontSize: '28px', fontWeight: '700', lineHeight: 1 }}>50+</div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>
              Experienced Staff
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 400px' }}>
          <p
            style={{
              fontStyle: 'italic',
              color: '#eab308',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '12px',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            About Us
          </p>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: '600',
              color: '#1a1a1a',
              lineHeight: 1.3,
              marginBottom: '20px',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            {heading}
          </h2>

          <p
            style={{
              color: '#555555',
              fontSize: '15px',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            {paragraph1}
          </p>

          {paragraph2 && (
            <p
              style={{
                color: '#555555',
                fontSize: '15px',
                lineHeight: 1.8,
                marginBottom: '32px',
              }}
            >
              {paragraph2}
            </p>
          )}

          <a
            href="/about"
            style={{
              display: 'inline-block',
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              padding: '14px 36px',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#eab308'
              e.currentTarget.style.color = '#000000'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#1a1a1a'
              e.currentTarget.style.color = '#ffffff'
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
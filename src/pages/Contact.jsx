import { useState } from 'react'
import contactBanner from '../assets/images/bedroomE.jpg'

const formLabelStyle = {
  display: 'block',
  fontSize: '11px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#1a1a1a',
  marginBottom: '8px',
  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
}

const formInputStyle = {
  width: '100%',
  padding: '12px 14px',
  fontSize: '15px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#ffffff',
  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
  outline: 'none',
}

const infoCardStyle = {
  backgroundColor: '#f9f9f7',
  borderRadius: '8px',
  padding: '32px',
  borderLeft: '3px solid #eab308',
}

const infoCardHeadingStyle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#1a1a1a',
  marginBottom: '14px',
  fontFamily: 'Playfair Display, Georgia, serif',
}

const infoCardLineStyle = {
  color: '#555555',
  fontSize: '14px',
  lineHeight: 1.8,
  margin: '0 0 6px 0',
  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
}

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', { name, email, phone, message })
  }

  return (
    <div>
      {/* Page Header Banner */}
      <div
        style={{
          position: 'relative',
          height: '600px',
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 24px',
          }}
        >
          <p
            style={{
              color: '#eab308',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '12px',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            Get In Touch
          </p>
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
              maxWidth: '520px',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
              fontWeight: '300',
            }}
          >
            Whether you have questions, need assistance, or simply want to share — we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Form + Info Section */}
      <div style={{ padding: '100px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          <div style={{ flex: '1 1 480px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
              <p style={{ fontStyle: 'italic', color: '#eab308', fontSize: '15px', fontWeight: '500', fontFamily: 'Cormorant Garamond, Times New Roman, serif', margin: 0 }}>
                Contact
              </p>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
                fontWeight: '600',
                color: '#1a1a1a',
                lineHeight: 1.3,
                marginBottom: '32px',
                fontFamily: 'Playfair Display, Georgia, serif',
              }}
            >
              Love to hear from you! Get in touch with us today
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={formLabelStyle}>Full Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={formInputStyle} required />
                </div>
                <div>
                  <label style={formLabelStyle}>Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={formInputStyle} required />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={formLabelStyle}>Phone Number</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={formInputStyle} />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={formLabelStyle}>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  style={{ ...formInputStyle, resize: 'vertical' }}
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  padding: '14px 40px',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#eab308'; e.currentTarget.style.color = '#000000' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#ffffff' }}
              >
                Send Message
              </button>
            </form>
          </div>

          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={infoCardStyle}>
              <h3 style={infoCardHeadingStyle}>Hotel Info Center</h3>
              <p style={infoCardLineStyle}>Open Hours: Monday – Sunday</p>
              <p style={infoCardLineStyle}>Telephone: +234 906 953 0033</p>
              <p style={infoCardLineStyle}>Email: info@julicishotelandsuites.com</p>
            </div>

            <div style={infoCardStyle}>
              <h3 style={infoCardHeadingStyle}>Hotel Location</h3>
              <p style={infoCardLineStyle}>No 13 Alhaji Agbabiaka Street, Ago Palace Way Okota Lagos Nigeria</p>
              <p style={infoCardLineStyle}>Telephone: +234 913 383 2888</p>
              <p style={infoCardLineStyle}>Email: info@julicishotelandsuites.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ width: '100%', height: '420px' }}>
        <iframe
          title="Julicis Hotel Location"
          src="https://maps.google.com/maps?q=No+13+Alhaji+Agbabiaka+Street%2C+Ago+Palace+Way+Okota+Lagos+Nigeria&t=m&z=14&output=embed&iwloc=near"
          style={{ width: '100%', height: '100%', border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Contact
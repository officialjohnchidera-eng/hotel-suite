import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { CheckCircle } from 'lucide-react'
import { roomsData } from '../data/roomsData'
import bedroomB from '../assets/images/bedroomB.jpg'

const EMAILJS_SERVICE_ID = 'service_30jujdr'
const EMAILJS_TEMPLATE_ID = 'template_5jvzvac'
const EMAILJS_PUBLIC_KEY = 'IM3yJ-3JgQylTlT8I'

const roomOptions = roomsData.map(room => room.name)

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  fontSize: '15px',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
  outline: 'none',
  transition: 'all 0.3s ease',
  backgroundColor: '#f8f8f8',
  color: '#1a1a1a',
}

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: '600',
  color: '#1a1a1a',
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
}

const Booking = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const preselectedRoom = searchParams.get('room') || roomOptions[0]
  const preCheckIn = searchParams.get('check_in') || ''
  const preCheckOut = searchParams.get('check_out') || ''
  const preAdults = searchParams.get('adults') || 1
  const preChildren = searchParams.get('children') || 0

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    room_type: preselectedRoom,
    check_in: preCheckIn,
    check_out: preCheckOut,
    adults: preAdults,
    children: preChildren,
    special_requests: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const selectedRoomData = roomsData.find(room => room.name === formData.room_type) || roomsData[0]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')

        const params = new URLSearchParams()
        params.set('room', formData.room_type)
        params.set('check_in', formData.check_in)
        params.set('check_out', formData.check_out)
        params.set('adults', formData.adults)
        params.set('children', formData.children)
        params.set('name', formData.name)

        setTimeout(() => {
          navigate(`/payment?${params.toString()}`)
        }, 1500)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <div>
      {/* Hero Banner with Bedroom Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '350px',
          backgroundImage: `url(${bedroomB})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
          }}
        />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', zIndex: 2 }}>
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            Book Your Stay
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              letterSpacing: '0.05em',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            Fill in your details and we'll confirm your reservation shortly.
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {status === 'success' && (
            <div
              style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '12px',
                padding: '24px 28px',
                marginBottom: '32px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              <CheckCircle size={24} color="#16a34a" />
              <div>
                <p style={{ color: '#166534', fontSize: '16px', fontWeight: '600', margin: 0 }}>
                  Booking Request Sent!
                </p>
                <p style={{ color: '#166534', fontSize: '14px', margin: '4px 0 0' }}>
                  Redirecting you to payment details...
                </p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div
              style={{
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              <p style={{ color: '#991b1b', fontSize: '15px', margin: 0 }}>
                Something went wrong. Please try again or contact us directly.
              </p>
            </div>
          )}

          {/* Room Summary Card - Larger Image */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              backgroundColor: '#f8f6f3',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '40px',
              flexWrap: 'wrap',
              border: '1px solid rgba(0,0,0,0.04)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{
                width: '200px',
                height: '150px',
                borderRadius: '12px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src={selectedRoomData.image}
                alt={selectedRoomData.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '6px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    margin: 0,
                    fontFamily: 'Playfair Display, Georgia, serif',
                  }}
                >
                  {selectedRoomData.name}
                </h3>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#eab308',
                    fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                  }}
                >
                  {selectedRoomData.price}
                </span>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#777777',
                  margin: '0 0 10px',
                  lineHeight: 1.6,
                  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                }}
              >
                {selectedRoomData.description}
              </p>
              <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#555555', fontFamily: 'Cormorant Garamond, Times New Roman, serif' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🛏 {selectedRoomData.bed}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>👤 {selectedRoomData.guests}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gap: '24px' }}>
              <div>
                <label style={labelStyle}>Room Type</label>
                <select
                  name="room_type"
                  value={formData.room_type}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                >
                  {roomOptions.map(room => (
                    <option key={room} value={room}>{room}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Check In</label>
                  <input
                    type="date"
                    name="check_in"
                    value={formData.check_in}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Check Out</label>
                  <input
                    type="date"
                    name="check_out"
                    value={formData.check_out}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Adults</label>
                  <input
                    type="number"
                    name="adults"
                    min="1"
                    value={formData.adults}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Children</label>
                  <input
                    type="number"
                    name="children"
                    min="0"
                    value={formData.children}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="+234 800 000 0000"
                    required
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Special Requests (Optional)</label>
                <textarea
                  name="special_requests"
                  value={formData.special_requests}
                  onChange={handleChange}
                  style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                  placeholder="Let us know if you have any special requests..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  width: '100%',
                  backgroundColor: status === 'sending' ? '#d4a308' : '#eab308',
                  color: '#000000',
                  border: 'none',
                  padding: '18px 0',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(234,179,8,0.3)',
                }}
                onMouseEnter={e => {
                  if (status !== 'sending') {
                    e.currentTarget.style.backgroundColor = '#d4a308'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 30px rgba(234,179,8,0.4)'
                  }
                }}
                onMouseLeave={e => {
                  if (status !== 'sending') {
                    e.currentTarget.style.backgroundColor = '#eab308'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(234,179,8,0.3)'
                  }
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Submit Booking Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
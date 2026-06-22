import { Link } from 'react-router-dom'
import { Users, Bed, Wifi, Tv, Bath, Coffee, Check, Maximize, Eye, Clock, Snowflake } from 'lucide-react'
import bedroomE from '../../assets/images/bedroomE.jpg'

const ClassicRoom = () => {
  const room = {
    name: "Classic Room",
    price: "₦65,000.00",
    bed: "1 King Bed",
    guests: "3 Guests",
    size: "32 m²",
    bedType: "1 King Bed",
    image: bedroomE,
    description: "The Classic Room offers a perfect blend of comfort and style, featuring a spacious layout with elegant furnishings and modern amenities.",
    longDescription: "Experience the perfect balance of comfort and sophistication in our Classic Room. With its spacious interior, plush king-sized bed, and elegant decor, this room provides a serene retreat for both business and leisure travelers. The room includes a comfortable seating area, work desk, and a well-appointed bathroom with premium amenities.",
    amenities: [
      "Air Conditioning",
      "Flat-Screen TV",
      "Free WiFi",
      "Private Bathroom",
      "Premium Toiletries",
      "Work Desk",
      "Seating Area",
      "Daily Housekeeping",
      "24/7 Room Service"
    ],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
  }

  const getAmenityIcon = (amenity) => {
    const icons = {
      'Air Conditioning': <Snowflake size={20} />,
      'Flat-Screen TV': <Tv size={20} />,
      'Free WiFi': <Wifi size={20} />,
      'Private Bathroom': <Bath size={20} />,
      'Premium Toiletries': <Bath size={20} />,
      'Work Desk': <Coffee size={20} />,
      'Seating Area': <Users size={20} />,
      'Daily Housekeeping': <Check size={20} />,
      '24/7 Room Service': <Coffee size={20} />,
    }
    return icons[amenity] || <Check size={20} />
  }

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          minHeight: '400px',
          backgroundImage: `url(${room.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />
        
        <div
          style={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            zIndex: 2,
            width: '100%',
          }}
        >
          <Link
            to="/rooms"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px',
              textDecoration: 'none',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
              transition: 'color 0.3s ease',
              marginBottom: '24px',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#eab308'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
          >
            ← Back to Rooms
          </Link>
          
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            {room.name}
          </h1>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '16px',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Bed size={18} /> {room.bed}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Users size={18} /> {room.guests}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Maximize size={18} /> {room.size}
            </span>
          </div>
        </div>
      </div>

      {/* Room Details */}
      <div style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
            <div style={{ flex: '2 1 500px' }}>
              <div style={{ marginBottom: '40px' }}>
                <span
                  style={{
                    color: '#eab308',
                    fontSize: '18px',
                    fontWeight: '500',
                    fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                  }}
                >
                  {room.price} / night
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginTop: '8px',
                    marginBottom: '16px',
                    fontFamily: 'Playfair Display, Georgia, serif',
                  }}
                >
                  About This Room
                </h2>
                <p
                  style={{
                    color: '#555555',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    marginBottom: '16px',
                    fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                  }}
                >
                  {room.longDescription}
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '20px',
                    fontFamily: 'Playfair Display, Georgia, serif',
                  }}
                >
                  Room Amenities
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '12px',
                  }}
                >
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 14px',
                        backgroundColor: '#f9f9f7',
                        borderRadius: '8px',
                        border: '1px solid rgba(0,0,0,0.04)',
                      }}
                    >
                      <span style={{ color: '#eab308' }}>{getAmenityIcon(amenity)}</span>
                      <span
                        style={{
                          color: '#333333',
                          fontSize: '14px',
                          fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                        }}
                      >
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '16px',
                  padding: '24px',
                  backgroundColor: '#f8f6f3',
                  borderRadius: '12px',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#888888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                    }}
                  >
                    Bed Type
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#1a1a1a',
                      fontWeight: '500',
                      fontFamily: 'Playfair Display, Georgia, serif',
                    }}
                  >
                    {room.bedType}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#888888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                    }}
                  >
                    Room Size
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#1a1a1a',
                      fontWeight: '500',
                      fontFamily: 'Playfair Display, Georgia, serif',
                    }}
                  >
                    {room.size}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#888888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                    }}
                  >
                    Check In
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#1a1a1a',
                      fontWeight: '500',
                      fontFamily: 'Playfair Display, Georgia, serif',
                    }}
                  >
                    {room.checkIn}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#888888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                    }}
                  >
                    Check Out
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#1a1a1a',
                      fontWeight: '500',
                      fontFamily: 'Playfair Display, Georgia, serif',
                    }}
                  >
                    {room.checkOut}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ flex: '1 1 320px' }}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '32px 28px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                  position: 'sticky',
                  top: '100px',
                }}
              >
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#1a1a1a',
                    marginBottom: '8px',
                    fontFamily: 'Playfair Display, Georgia, serif',
                  }}
                >
                  {room.price}
                </h3>
                <p
                  style={{
                    color: '#888888',
                    fontSize: '14px',
                    marginBottom: '24px',
                    fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                  }}
                >
                  per night
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: '12px 14px',
                      backgroundColor: '#f9f9f7',
                      borderRadius: '8px',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '11px',
                        color: '#888888',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                      }}
                    >
                      Guests
                    </p>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#1a1a1a',
                        fontWeight: '500',
                        fontFamily: 'Playfair Display, Georgia, serif',
                      }}
                    >
                      <Users size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                      {room.guests}
                    </p>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: '12px 14px',
                      backgroundColor: '#f9f9f7',
                      borderRadius: '8px',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '11px',
                        color: '#888888',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                      }}
                    >
                      Bed
                    </p>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#1a1a1a',
                        fontWeight: '500',
                        fontFamily: 'Playfair Display, Georgia, serif',
                      }}
                    >
                      <Bed size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                      {room.bed}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/booking?room=${encodeURIComponent(room.name)}`}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: '#eab308',
                    color: '#000000',
                    padding: '16px 0',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                    fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#d4a308'
                    e.currentTarget.style.transform = 'scale(1.01)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#eab308'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  Book Now
                </Link>

                <div
                  style={{
                    marginTop: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666666',
                      fontSize: '13px',
                      fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                    }}
                  >
                    <Check size={16} color="#eab308" />
                    Best price guaranteed
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666666',
                      fontSize: '13px',
                      fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                    }}
                  >
                    <Check size={16} color="#eab308" />
                    Free cancellation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassicRoom
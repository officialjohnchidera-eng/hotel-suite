import { ShieldCheck } from 'lucide-react'

const FacilitiesSection = ({ suiteIcon, gymIcon, poolIcon, descriptions }) => {
  const defaultDescriptions = {
    suite: 'Elegant rooms designed for ultimate comfort and relaxation.',
    security: 'Round the clock security to ensure your safety and peace of mind.',
    fitness: 'Stay active with our fully equipped modern fitness center.',
    pool: 'Relax and unwind in our clean, well maintained swimming pool.',
  }

  const desc = { ...defaultDescriptions, ...descriptions }

  const facilities = [
    { icon: suiteIcon, title: 'Rooms and Suites', desc: desc.suite, isLucide: false },
    { icon: ShieldCheck, title: '24-Hour Security', desc: desc.security, isLucide: true },
    { icon: gymIcon, title: 'Fitness Center', desc: desc.fitness, isLucide: false },
    { icon: poolIcon, title: 'Swimming Pool', desc: desc.pool, isLucide: false },
  ]

  return (
    <div style={{ padding: '100px 24px', backgroundColor: '#f9f9f7' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '12px',
            }}
          >
            <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
            <p
              style={{
                fontStyle: 'italic',
                color: '#eab308',
                fontSize: '15px',
                fontWeight: '500',
                fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                margin: 0,
              }}
            >
              Facilities
            </p>
            <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: '600',
              color: '#1a1a1a',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            Hotel Facilities
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}
        >
          {facilities.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '40px 28px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)'
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fefce8',
                  borderRadius: '50%',
                }}
              >
                {item.isLucide ? (
                  <item.icon size={36} color="#eab308" />
                ) : (
                  <img src={item.icon} alt={item.title} style={{ width: '42px', height: '42px' }} />
                )}
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  fontFamily: 'Playfair Display, Georgia, serif',
                  letterSpacing: '0.01em',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#666666',
                  lineHeight: 1.75,
                  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FacilitiesSection
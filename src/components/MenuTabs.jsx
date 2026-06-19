import { useState } from 'react'
import { menuData } from '../data/menuData'

const MenuTabs = () => {
  const categories = Object.keys(menuData)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <div style={{ padding: '100px 24px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '12px' }}>
            <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
            <p style={{ fontStyle: 'italic', color: '#eab308', fontSize: '15px', fontWeight: '500', fontFamily: 'Cormorant Garamond, Times New Roman, serif', margin: 0 }}>
              Our Menu
            </p>
            <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '600', color: '#1a1a1a', fontFamily: 'Playfair Display, Georgia, serif' }}>
            What We Serve
          </h2>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '50px',
          }}
        >
          {categories.map(category => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: isActive ? '1px solid #eab308' : '1px solid #e5e5e5',
                  backgroundColor: isActive ? '#eab308' : 'transparent',
                  color: isActive ? '#000000' : '#555555',
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#eab308'
                    e.currentTarget.style.color = '#eab308'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#e5e5e5'
                    e.currentTarget.style.color = '#555555'
                  }
                }}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Menu Items Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {menuData[activeCategory].map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '16px',
                backgroundColor: '#f9f9f7',
                borderRadius: '10px',
                padding: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '6px',
                    gap: '8px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      fontFamily: 'Playfair Display, Georgia, serif',
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </h4>
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: '700',
                      color: '#eab308',
                      whiteSpace: 'nowrap',
                      fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#777777',
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: 'Cormorant Garamond, Times New Roman, serif',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuTabs
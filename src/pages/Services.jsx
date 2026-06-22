import { Link } from 'react-router-dom'
import gymHouseC from '../assets/images/gymHouseC.jpg'
import pool from '../assets/images/pool.jpg'
import fitnessCenter from '../assets/images/fitnessCenter.jpg'
import dining from '../assets/images/dining.jpg'
import conferenceHall from '../assets/images/conferenceHall.jpg'

const ServiceSection = ({ id, label, title, description, image, reverse, link }) => {
  return (
    <div
      id={id}
      style={{
        padding: '90px 24px',
        backgroundColor: reverse ? '#f9f9f7' : '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: reverse ? 'row-reverse' : 'row',
          gap: '50px',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: '1 1 380px' }}>
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              height: '340px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={image}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ flex: '1 1 380px' }}>
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
            {label}
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: '#555555',
              fontSize: '15px',
              lineHeight: 1.8,
              marginBottom: '24px',
            }}
          >
            {description}
          </p>
          {link && (
            <Link
              to={link}
              style={{
                display: 'inline-block',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                padding: '12px 30px',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#eab308')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
            >
              View More
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '40vh',
          minHeight: '300px',
          backgroundColor: '#0f0f0f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            Our Services
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '15px',
              letterSpacing: '0.05em',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            Everything you need for a comfortable and memorable stay.
          </p>
        </div>
      </div>

      <ServiceSection
        id="gym"
        label="Recreation"
        title="Fitness & Gym"
        description="Maintain your routine at our well-equipped gym, featuring modern cardio machines, free weights, and strength training equipment for a complete workout at your convenience."
        image={gymHouseC}
      />

      <ServiceSection
        id="fitness"
        label="Recreation"
        title="Fitness Center"
        description="Our fitness center is open around the clock, giving you the flexibility to stay active whenever suits your schedule, whether you're an early riser or a night owl."
        image={fitnessCenter}
        reverse
      />

      <ServiceSection
        id="pool"
        label="Recreation"
        title="Swimming Pool"
        description="Dive into relaxation at our sparkling outdoor swimming pool, the perfect spot for a refreshing dip after a long day. A shallow area is also available for children."
        image={pool}
      />

      <ServiceSection
        id="restaurant"
        label="Services"
        title="Restaurant"
        description="Indulge in an unforgettable culinary journey at our signature restaurant, offering authentic Nigerian delicacies alongside international favorites, all crafted with fresh, locally sourced ingredients."
        image={dining}
        link="/restaurant"
        reverse
      />

      <ServiceSection
        id="conference"
        label="Services"
        title="Conference Hall"
        description="Host your next business meeting, seminar, or special event in our well-appointed conference hall, equipped with modern audiovisual facilities and flexible seating arrangements."
        image={conferenceHall}
      />
    </div>
  )
}

export default Services
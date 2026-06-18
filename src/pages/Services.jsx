import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { ShieldCheck, Wifi, Dumbbell, UtensilsCrossed, Clock, Users } from 'lucide-react'
import bannerImage from '../assets/images/hero4.jpg'
import dining from '../assets/images/dining.jpg'
import fitnessCenter from '../assets/images/fitnessCenter.jpg'
import poolIcon from '../assets/images/swiming_icon.svg'
import suiteIcon from '../assets/images/suite_building.png'
import poolImage from '../assets/images/pool.jpg'
import conferenceHallImage from '../assets/images/conferenceHall.jpg'

const serviceHighlights = [
  {
    icon: ShieldCheck,
    isLucide: true,
    title: '24-Hour Security',
    desc: 'Dedicated security staff on-site around the clock, so you can relax and feel safe throughout your stay.',
  },
  {
    icon: Wifi,
    isLucide: true,
    title: 'Free WiFi',
    desc: "Complimentary high-speed WiFi that reaches every corner of the hotel, so you're always connected.",
  },
  {
    icon: Dumbbell,
    isLucide: true,
    title: 'Fitness Center',
    desc: "A fully equipped gym to help you keep up your routine, even while you're away from home.",
  },
  {
    icon: UtensilsCrossed,
    isLucide: true,
    title: 'Restaurant',
    desc: 'An on-site restaurant serving a wide variety of dishes throughout the day.',
  },
  {
    icon: Clock,
    isLucide: true,
    title: '24/7 Front Desk',
    desc: 'Our front desk team is on hand around the clock for anything you need during your stay.',
  },
  {
    icon: poolIcon,
    isLucide: false,
    title: 'Swimming Pool',
    desc: "A sparkling pool that's the perfect spot to cool off and unwind.",
  },
  {
    icon: suiteIcon,
    isLucide: false,
    title: 'Rooms & Suites',
    desc: 'Thoughtfully designed rooms and suites built around comfort and modern conveniences.',
  },
  {
    icon: Users,
    isLucide: true,
    title: 'Conference Hall',
    desc: 'A versatile hall for meetings, seminars, and private events, with seating arranged to fit your needs.',
  },
]

const Services = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  const eyebrowStyle = {
    fontStyle: 'italic',
    color: '#eab308',
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '12px',
    fontFamily: 'Cormorant Garamond, Times New Roman, serif',
  }

  const headingStyle = {
    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
    fontWeight: '600',
    color: '#1a1a1a',
    lineHeight: 1.3,
    marginBottom: '20px',
    fontFamily: 'Playfair Display, Georgia, serif',
  }

  const bodyTextStyle = {
    color: '#555555',
    fontSize: '15px',
    lineHeight: 1.8,
    marginBottom: '32px',
  }

  const ctaStyle = {
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
  }

  const handleCtaEnter = e => {
    e.currentTarget.style.backgroundColor = '#eab308'
    e.currentTarget.style.color = '#000000'
  }
  const handleCtaLeave = e => {
    e.currentTarget.style.backgroundColor = '#1a1a1a'
    e.currentTarget.style.color = '#ffffff'
  }

  const imageStyle = {
    width: '100%',
    height: '420px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
  }

  const featureRowStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '60px',
    alignItems: 'center',
  }

  return (
    <div>
      {/* Page Banner */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '600px',
          backgroundImage: 'url(' + bannerImage + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
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
              fontSize: '12px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '14px',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            What We Offer
          </p>
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '600',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            Our Services
          </h1>
          <p
            style={{
              maxWidth: '520px',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '15px',
              lineHeight: 1.7,
              marginBottom: '18px',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            A range of amenities and personal touches designed to make your stay easier and more comfortable.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.75)',
              fontSize: '13px',
              letterSpacing: '0.1em',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
            }}
          >
            <Link to="/" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: '#eab308' }}>Services</span>
          </div>
        </div>
      </div>

      {/* At a Glance Section */}
      <div
        id="recreation"
        style={{ padding: '100px 24px', backgroundColor: '#f9f9f7', scrollMarginTop: '100px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={eyebrowStyle}>At A Glance</p>
            <h2 style={{ ...headingStyle, marginBottom: '0' }}>Everything Included In Your Stay</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '32px',
            }}
          >
            {serviceHighlights.map((item, index) => (
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

      {/* Restaurant Section */}
      <div
        id="restaurant"
        style={{ padding: '100px 24px', backgroundColor: '#ffffff', scrollMarginTop: '100px' }}
      >
        <div style={featureRowStyle}>
          <div style={{ flex: '1 1 400px' }}>
            <img src={dining} alt="Julicis Hotel Restaurant" style={imageStyle} />
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <p style={eyebrowStyle}>Dining</p>
            <h2 style={headingStyle}>Restaurant</h2>
            <p style={bodyTextStyle}>
              Our restaurant brings together Nigerian favorites and international dishes, all made with fresh, locally sourced ingredients. The space is set up for breakfast, lunch, and dinner, with enough seating to comfortably host both hotel guests and outside visitors.
            </p>
            <Link to="/contact" style={ctaStyle} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>

      {/* Fitness Center Section (also the target for the Navbar's separate "Gym" link) */}
      <div id="gym" style={{ scrollMarginTop: '100px' }} />
      <div
        id="fitness"
        style={{ padding: '100px 24px', backgroundColor: '#f9f9f7', scrollMarginTop: '100px' }}
      >
        <div style={featureRowStyle}>
          <div style={{ flex: '1 1 400px' }}>
            <p style={eyebrowStyle}>Wellness</p>
            <h2 style={headingStyle}>Fitness Center</h2>
            <p style={bodyTextStyle}>
              The fitness center is fitted with cardio equipment like treadmills, ellipticals, and stationary bikes, along with free weights and strength training gear, so a busy travel schedule doesn't have to mean skipping your workout.
            </p>
            <Link to="/contact" style={ctaStyle} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>
              Enquire Now
            </Link>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <img src={fitnessCenter} alt="Julicis Hotel Fitness Center" style={imageStyle} />
          </div>
        </div>
      </div>

      {/* Swimming Pool Section */}
      <div
        id="pool"
        style={{ padding: '100px 24px', backgroundColor: '#ffffff', scrollMarginTop: '100px' }}
      >
        <div style={featureRowStyle}>
          <div style={{ flex: '1 1 400px' }}>
            <img src={poolImage} alt="Julicis Hotel Swimming Pool" style={imageStyle} />
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <p style={eyebrowStyle}>Relax</p>
            <h2 style={headingStyle}>Swimming Pool</h2>
            <p style={bodyTextStyle}>
              Our outdoor pool is built for a relaxed swim or a quick dip to cool off, with a shallower section for children and towels provided poolside.
            </p>
            <Link to="/contact" style={ctaStyle} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* Conference Hall Section */}
      <div
        id="conference"
        style={{ padding: '100px 24px', backgroundColor: '#f9f9f7', scrollMarginTop: '100px' }}
      >
        <div style={featureRowStyle}>
          <div style={{ flex: '1 1 400px' }}>
            <p style={eyebrowStyle}>Business & Events</p>
            <h2 style={headingStyle}>Conference Hall</h2>
            <p style={bodyTextStyle}>
              The conference hall can hold up to 150 guests and comes with adjustable seating to fit anything from a board meeting to a full seminar or private event. Our events team is available to help with planning ahead of time.
            </p>
            <Link to="/contact" style={ctaStyle} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>
              Enquire Now
            </Link>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <img src={conferenceHallImage} alt="Julicis Hotel Conference Hall" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
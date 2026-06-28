import bedroomH from '../assets/images/bedroomH.jpg'
import bedroomI from '../assets/images/bedroomI.jpg'
import suiteIcon from '../assets/images/suite_building.png'
import gymIcon from '../assets/images/gymHouseSvg.svg'
import poolIcon from '../assets/images/swiming_icon.svg'
import AboutSection from '../components/AboutSection'
import FacilitiesSection from '../components/FacilitiesSection'
import TestimonialsSection from '../components/TestimonialsSection'

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '350px',
          backgroundImage: `url(${bedroomH})`,
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
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, Georgia, serif',
            }}
          >
            About Us
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '15px',
              letterSpacing: '0.05em',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
            }}
          >
            Discover who we are and our commitment to your exceptional stay.
          </p>
        </div>
      </div>

      {/* About Section - using different bedroom images and About-specific text */}
      <AboutSection
        heading=" Welcome To Golden Bella Hotels and Suites "
        paragraph1=" Golden Bella Hotels & Suites is a premier hospitality brand offering a luxurious blend of comfort, style, and personalized service. Nestled in the heart of Lagos, Nigeria, located at No 13 Alhaji Agbabiaka Street, Ago Palace Way Okota. Our hotel caters to both business and leisure travelers, delivering world-class experiences in a serene and secure environment."
        paragraph2="Since our establishment in 2025, we consistently set high standards in accommodation, dining, and guest experience, becoming a trusted destination for tourists, conferences, events, and special occasions, ensuring a restful retreat whether you're here for business or leisure."
        mainImage={bedroomH}
        overlapImage={bedroomI}
      />

      {/* Facilities Section - using About-specific descriptions */}
      <FacilitiesSection
        suiteIcon={suiteIcon}
        gymIcon={gymIcon}
        poolIcon={poolIcon}
        descriptions={{
          suite: 'Our rooms are thoughtfully designed, offering a haven of comfort with plush bedding and modern amenities.',
          security: 'Rest easy with our dedicated 24-hour security, ensuring your safety and peace of mind throughout your stay.',
          fitness: 'Maintain your routine at our well-equipped gym, with machines for a complete workout at your convenience.',
          pool: 'Dive into relaxation at our sparkling swimming pool, the perfect spot for a refreshing dip.',
        }}
      />

      {/* Testimonials - identical to Home page, shared component */}
      <TestimonialsSection />
    </div>
  )
}

export default About
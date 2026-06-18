import { useState } from 'react'

const testimonials = [
  {
    name: 'Henry Obani',
    title: 'Guest',
    text: 'My stay was absolutely fantastic! The room was spotless and incredibly comfortable. We loved the plush bedding and the modern amenities. The staff was also incredibly friendly and helpful, they made us feel right at home. I\'ll definitely be back',
    rating: 5
  },
  {
    name: 'Jessica Umeh',
    title: 'Business Traveler',
    text: 'I recently stayed at Julicis Hotel for a business trip, and I couldn\'t have asked for a better experience. The room was a true sanctuary, it was very peaceful and quiet. The high-speed WiFi was a huge plus. Everything was well maintained and clean, and I appreciated the attention to detail. Highly recommend',
    rating: 5
  },
  {
    name: 'Michael Adebayo',
    title: 'Frequent Guest',
    text: 'The service at Julicis Hotel exceeded all my expectations. From the warm welcome to the impeccable room service, every detail was perfect. The location is ideal and the amenities are top-notch. I highly recommend this hotel to anyone visiting Lagos.',
    rating: 5
  }
]

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div style={{ padding: '100px 24px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '12px' }}>
            <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
            <p style={{ fontStyle: 'italic', color: '#eab308', fontSize: '15px', fontWeight: '500', fontFamily: 'Cormorant Garamond, Times New Roman, serif', margin: 0 }}>
              Testimonial
            </p>
            <span style={{ width: '28px', height: '1px', backgroundColor: '#eab308' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '600', color: '#1a1a1a', fontFamily: 'Playfair Display, Georgia, serif' }}>
            What Our Client Say
          </h2>
        </div>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#f9f9f7',
            borderRadius: '12px',
            padding: '40px 24px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.04)',
            textAlign: 'center',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ marginBottom: '16px', color: '#eab308', fontSize: '20px', letterSpacing: '3px' }}>
              {'★'.repeat(testimonials[currentTestimonial].rating)}
            </div>

            <div style={{ marginBottom: '12px' }}>
              <span style={{ color: '#eab308', fontSize: '36px', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</span>
            </div>
            <p style={{
              color: '#444444',
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: 1.8,
              marginBottom: '20px',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
              fontStyle: 'italic',
              maxWidth: '700px',
              margin: '0 auto 20px'
            }}>
              {testimonials[currentTestimonial].text}
            </p>
            <div>
              <h4 style={{
                fontSize: 'clamp(18px, 2vw, 20px)',
                fontWeight: '600',
                color: '#1a1a1a',
                fontFamily: 'Playfair Display, Georgia, serif',
                marginBottom: '2px'
              }}>
                {testimonials[currentTestimonial].name}
              </h4>
              <p style={{
                fontSize: '14px',
                color: '#888888',
                fontFamily: 'Cormorant Garamond, Times New Roman, serif'
              }}>
                {testimonials[currentTestimonial].title}
              </p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              zIndex: 10
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#eab308'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#1a1a1a'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ‹
          </button>

          <button
            onClick={nextTestimonial}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              zIndex: 10
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#eab308'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#1a1a1a'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ›
          </button>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '30px'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: index === currentTestimonial ? '#eab308' : '#dddddd',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
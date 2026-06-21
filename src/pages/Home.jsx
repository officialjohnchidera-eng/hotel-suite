import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Camera } from 'lucide-react';
import social1 from "../assets/images/15129348745018470.jpg";
import social2 from "../assets/images/430023464444141838.jpg";
import social3 from "../assets/images/5207355814916294.jpg";
import social4 from "../assets/images/55239532924383509.jpg";
import social5 from "../assets/images/62909726040863702.jpg";
import social6 from "../assets/images/6473993212477414.jpg";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";
import dining from "../assets/images/dining.jpg";
import hero6 from "../assets/images/hero6.jpg";
import fitnessCenter from "../assets/images/fitnessCenter.jpg";
import fitness2 from "../assets/images/fitness2.jpg";
import pool from "../assets/images/pool.jpg";
import suiteIcon from "../assets/images/suite_building.png";
import gymIcon from "../assets/images/gymHouseSvg.svg";
import poolIcon from "../assets/images/swiming_icon.svg";
import { ShieldCheck } from "lucide-react";
import bedroomA from "../assets/images/bedroomA.jpg";
import bedroomB from "../assets/images/bedroomB.jpg";
import bedroomC from "../assets/images/bedroomC.jpg";
import bedroomD from "../assets/images/bedroomD.jpg";
import bedroomE from "../assets/images/bedroomE.jpg";
import bedroomG from "../assets/images/bedroomG.jpg";

const slides = [
  {
    image: hero1,
    heading: "Welcome To Julicis Hotel & Suites",
    subheading: "Experience Luxury Like Never Before",
  },
  {
    image: hero2,
    heading: "Relax, Recharge, Repeat",
    subheading: "Your Perfect Getaway Awaits",
  },
  {
    image: hero3,
    heading: "World Class Amenities",
    subheading: "Comfort Meets Elegance",
  },
  {
    image: hero4,
    heading: "A Stay You Will Never Forget",
    subheading: "Premium Suites For Every Occasion",
  },
  {
    image: dining,
    heading: "Indulge In Culinary Excellence",
    subheading: "Fine Dining At Its Best",
  },
  {
    image: hero6,
    heading: "Luxurious Bathrooms & Spa",
    subheading: "Relaxation Redefined",
  },
  {
    image: fitnessCenter,
    heading: "Modern Fitness Center",
    subheading: "Stay Fit While You Travel",
  },
];

const rooms = [
  {
    image: bedroomA,
    price: "₦55,000.00",
    name: "Standard Room",
    bed: "1 Bed",
    guests: "1 Guest",
  },
  {
    image: bedroomB,
    price: "₦120,000.00",
    name: "Julicis Royale Suite",
    bed: "1 King Bed",
    guests: "5 Guests",
  },
  {
    image: bedroomC,
    price: "₦85,000.00",
    name: "Luxury Room",
    bed: "1 King Bed",
    guests: "4 Guests",
  },
  {
    image: bedroomD,
    price: "₦70,000.00",
    name: "Deluxe Room",
    bed: "1 King Bed",
    guests: "3 Guests",
  },
  {
    image: bedroomE,
    price: "₦65,000.00",
    name: "Classic Room",
    bed: "1 King Bed",
    guests: "3 Guests",
  },
  {
    image: bedroomG,
    price: "₦150,000.00",
    name: "Presidential Suite",
    bed: "2 King Beds",
    guests: "6 Guests",
  },
];

const testimonials = [
  {
    name: "Henry Obani",
    title: "Guest",
    text: "My stay was absolutely fantastic! The room was spotless and incredibly comfortable. We loved the plush bedding and the modern amenities. The staff was also incredibly friendly and helpful, they made us feel right at home. I'll definitely be back",
    rating: 5,
  },
  {
    name: "Jessica Umeh",
    title: "Business Traveler",
    text: "I recently stayed at Julicis Hotel for a business trip, and I couldn't have asked for a better experience. The room was a true sanctuary, it was very peaceful and quiet. The high-speed WiFi was a huge plus. Everything was well maintained and clean, and I appreciated the attention to detail. Highly recommend",
    rating: 5,
  },
  {
    name: "Michael Adebayo",
    title: "Frequent Guest",
    text: "The service at Julicis Hotel exceeded all my expectations. From the warm welcome to the impeccable room service, every detail was perfect. The location is ideal and the amenities are top-notch. I highly recommend this hotel to anyone visiting Lagos.",
    rating: 5,
  },
];

const labelStyle = {
  display: "block",
  fontSize: "10px",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "#eab308",
  marginBottom: "6px",
  fontFamily: "Cormorant Garamond, Times New Roman, serif",
};

const dateInputStyle = {
  width: "100%",
  padding: "0 0 4px 0",
  fontSize: "14px",
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.25)",
  backgroundColor: "transparent",
  color: "#ffffff",
  colorScheme: "dark",
  fontFamily: "Cormorant Garamond, Times New Roman, serif",
  outline: "none",
};

const counterBtnStyle = {
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  border: "1px solid rgba(234,179,8,0.5)",
  backgroundColor: "transparent",
  color: "#eab308",
  cursor: "pointer",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.2s ease, color 0.2s ease",
};

const counterValueStyle = {
  color: "#ffffff",
  fontSize: "14px",
  minWidth: "18px",
  textAlign: "center",
  fontFamily: "Cormorant Garamond, Times New Roman, serif",
};

const Home = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoActiveIndex, setVideoActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 600);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setVideoActiveIndex((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToSlide = (index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 600);
  };

  const handleBooking = () => {
    const params = new URLSearchParams()
    if (checkIn) params.set('check_in', checkIn)
    if (checkOut) params.set('check_out', checkOut)
    params.set('adults', adults)
    params.set('children', children)
    navigate(`/booking?${params.toString()}`)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(" + slide.image + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: index === current ? 1 : 0,
              transform: index === current ? "scale(1.05)" : "scale(1)",
              transition: "opacity 1s ease, transform 6s ease",
              zIndex: index === current ? 1 : 0,
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <p
            style={{
              color: "#eab308",
              fontSize: "11px",
              fontWeight: "400",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              marginBottom: "12px",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(20px)" : "translateY(0)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              fontFamily: "Cormorant Garamond, Times New Roman, serif",
            }}
          >
            Luxury Hotel & Suites
          </p>

          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              fontWeight: "300",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              lineHeight: 1.1,
              marginBottom: "14px",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(30px)" : "translateY(0)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
              fontFamily: "Playfair Display, Georgia, serif",
            }}
          >
            {slides[current].heading}
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
              letterSpacing: "0.15em",
              marginBottom: "32px",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(30px)" : "translateY(0)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
              fontFamily: "Cormorant Garamond, Times New Roman, serif",
              fontWeight: "300",
            }}
          >
            {slides[current].subheading}
          </p>

          <a
            href="/rooms"
            style={{
              display: "inline-block",
              border: "1px solid #eab308",
              color: "#eab308",
              padding: "12px 36px",
              fontSize: "11px",
              fontWeight: "400",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              textDecoration: "none",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(30px)" : "translateY(0)",
              transition:
                "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s, background-color 0.3s ease, color 0.3s ease",
              fontFamily: "Cormorant Garamond, Times New Roman, serif",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#eab308";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#eab308";
            }}
          >
            Explore Rooms
          </a>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 4,
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: index === current ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  index === current ? "#eab308" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "32px",
            zIndex: 4,
            color: "rgba(255,255,255,0.6)",
            fontSize: "12px",
            letterSpacing: "0.2em",
            fontFamily: "Cormorant Garamond, Times New Roman, serif",
            fontWeight: "300",
          }}
        >
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* Booking Widget Section */}
      <div style={{ padding: "56px 24px 32px" }}>
        <style>{`
          .jul-booking-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
          }
          .jul-booking-field:not(:first-child) {
            border-left: 1px solid rgba(255,255,255,0.12);
          }
          @media (max-width: 700px) {
            .jul-booking-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .jul-booking-field {
              border-left: none !important;
            }
            .jul-booking-field:nth-child(2n) {
              border-left: 1px solid rgba(255,255,255,0.12) !important;
            }
            .jul-booking-field:nth-child(n+3) {
              border-top: 1px solid rgba(255,255,255,0.12);
            }
            .jul-booking-btn {
              grid-column: 1 / -1;
              border-left: none !important;
              border-top: 1px solid rgba(255,255,255,0.12);
            }
          }
        `}</style>

        <div
          className="jul-booking-grid"
          style={{
            backgroundColor: "rgba(15, 15, 15, 0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(234, 179, 8, 0.25)",
            borderRadius: "4px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
          }}
        >
          <div className="jul-booking-field" style={{ padding: "16px 18px" }}>
            <label style={labelStyle}>Check In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              style={dateInputStyle}
            />
          </div>

          <div className="jul-booking-field" style={{ padding: "16px 18px" }}>
            <label style={labelStyle}>Check Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              style={dateInputStyle}
            />
          </div>

          <div className="jul-booking-field" style={{ padding: "16px 18px" }}>
            <label style={labelStyle}>Adult</label>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                style={counterBtnStyle}
              >
                −
              </button>
              <span style={counterValueStyle}>{adults}</span>
              <button
                onClick={() => setAdults((prev) => prev + 1)}
                style={counterBtnStyle}
              >
                +
              </button>
            </div>
          </div>

          <div className="jul-booking-field" style={{ padding: "16px 18px" }}>
            <label style={labelStyle}>Children</label>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                style={counterBtnStyle}
              >
                −
              </button>
              <span style={counterValueStyle}>{children}</span>
              <button
                onClick={() => setChildren((prev) => prev + 1)}
                style={counterBtnStyle}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="jul-booking-btn"
            onClick={handleBooking}
            style={{
              backgroundColor: "#eab308",
              color: "#000000",
              border: "none",
              padding: "14px 18px",
              fontSize: "11px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              cursor: "pointer",
              fontFamily: "Cormorant Garamond, Times New Roman, serif",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#d4a308")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#eab308")
            }
          >
            Check Availability
          </button>
        </div>
      </div>

      {/* About Section */}
      <div style={{ padding: "100px 24px", backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              flex: "1 1 400px",
              minHeight: "480px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "80%",
                height: "380px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={hero2}
                alt="Julicis Hotel Interior"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "60%",
                height: "260px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                border: "6px solid #ffffff",
              }}
            >
              <img
                src={hero3}
                alt="Julicis Hotel Suite"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                backgroundColor: "#eab308",
                color: "#000000",
                padding: "20px 24px",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(234,179,8,0.4)",
              }}
            >
              <div
                style={{ fontSize: "28px", fontWeight: "700", lineHeight: 1 }}
              >
                50+
              </div>
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                Experienced Staff
              </div>
            </div>
          </div>

          <div style={{ flex: "1 1 400px" }}>
            <p
              style={{
                fontStyle: "italic",
                color: "#eab308",
                fontSize: "15px",
                fontWeight: "500",
                marginBottom: "12px",
                fontFamily: "Cormorant Garamond, Times New Roman, serif",
              }}
            >
              About Us
            </p>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "600",
                color: "#1a1a1a",
                lineHeight: 1.3,
                marginBottom: "20px",
                fontFamily: "Playfair Display, Georgia, serif",
              }}
            >
              Welcome To Julicis Hotel and Suite
            </h2>

            <p
              style={{
                color: "#555555",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              Julicis Hotels & Suites is a premier hospitality brand offering a
              luxurious blend of comfort, style, and personalized service.
              Nestled in the heart of Lagos, Nigeria, located at No 13 Alhaji
              Agbabiaka Street, Ago Palace Way Okota. Our hotel caters to both
              business and leisure travelers, delivering world-class experiences
              in a serene and secure environment.
            </p>

            <p
              style={{
                color: "#555555",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Since our establishment in 2025, we consistently set high
              standards in accommodation, dining, and guest experience, becoming
              a trusted destination for tourists, conferences, events, and
              special occasions.
            </p>

            <a
              href="/about"
              style={{
                display: "inline-block",
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                padding: "14px 36px",
                fontSize: "12px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textDecoration: "none",
                borderRadius: "4px",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#eab308";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div style={{ padding: "100px 24px", backgroundColor: "#f9f9f7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "#eab308",
                }}
              />
              <p
                style={{
                  color: "#eab308",
                  fontSize: "30px",
                  fontWeight: "500",
                  fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  margin: 0,
                }}
              >
                Facilities
              </p>
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "#eab308",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "600",
                color: "#1a1a1a",
                fontFamily: "Playfair Display, Georgia, serif",
              }}
            >
              Hotel Facilities
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                icon: suiteIcon,
                title: "Rooms & Suites",
                desc: "Elegant rooms designed for ultimate comfort and relaxation.",
                isLucide: false,
              },
              {
                icon: ShieldCheck,
                title: "24-Hour Security",
                desc: "Round the clock security to ensure your safety and peace of mind.",
                isLucide: true,
              },
              {
                icon: gymIcon,
                title: "Fitness Center",
                desc: "Stay active with our fully equipped modern fitness center.",
                isLucide: false,
              },
              {
                icon: poolIcon,
                title: "Swimming Pool",
                desc: "Relax and unwind in our clean, well maintained swimming pool.",
                isLucide: false,
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "40px 28px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.06)";
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fefce8",
                    borderRadius: "50%",
                  }}
                >
                  {item.isLucide ? (
                    <item.icon size={36} color="#eab308" />
                  ) : (
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{ width: "42px", height: "42px" }}
                    />
                  )}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    marginBottom: "12px",
                    fontFamily: "Playfair Display, Georgia, serif",
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#666666",
                    lineHeight: 1.75,
                    fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video-Style Featured Section - FULL WIDTH */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          minHeight: '420px',
          overflow: 'hidden',
        }}
      >
        {[hero5, hero1, hero2, hero3, hero4].map((img, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === videoActiveIndex ? 1 : 0,
              transform: index === videoActiveIndex && isPlaying
                ? 'scale(1.08)'
                : 'scale(1)',
              transition: isPlaying
                ? 'opacity 1s ease, transform 2.5s ease'
                : 'opacity 0.6s ease',
            }}
          />
        ))}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isPlaying ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.5)',
            transition: 'background 0.6s ease',
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
              fontSize: '13px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '16px',
              fontFamily: 'Cormorant Garamond, Times New Roman, serif',
              opacity: isPlaying ? 0 : 1,
              transition: 'opacity 0.4s ease',
            }}
          >
            Julicis Hotel & Suites
          </p>
          <h2
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: '600',
              fontFamily: 'Playfair Display, Georgia, serif',
              letterSpacing: '0.03em',
              marginBottom: isPlaying ? 0 : '32px',
              opacity: isPlaying ? 0 : 1,
              transition: 'opacity 0.4s ease',
              height: isPlaying ? 0 : 'auto',
              overflow: 'hidden',
            }}
          >
            Relax. Recharge. Repeat.
          </h2>

          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                border: '2px solid #eab308',
                backgroundColor: 'rgba(234,179,8,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1)'
                e.currentTarget.style.backgroundColor = 'rgba(234,179,8,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.backgroundColor = 'rgba(234,179,8,0.15)'
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  borderLeft: '16px solid #eab308',
                  marginLeft: '4px',
                }}
              />
            </button>
          )}
        </div>

        {isPlaying && (
          <button
            onClick={() => {
              setIsPlaying(false)
              setVideoActiveIndex(0)
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#ffffff',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
            }}
          >
            ✕
          </button>
        )}

        {isPlaying && (
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
              zIndex: 5,
            }}
          >
            {[hero5, hero1, hero2, hero3, hero4].map((_, index) => (
              <div
                key={index}
                style={{
                  width: index === videoActiveIndex ? '24px' : '8px',
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: index === videoActiveIndex ? '#eab308' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.4s ease',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Services Section */}
      <div style={{ padding: "100px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "12px" }}>
              <span style={{ width: "28px", height: "1px", backgroundColor: "#eab308" }} />
              <p style={{ fontStyle: "italic", color: "#eab308", fontSize: "15px", fontWeight: "500", fontFamily: "Cormorant Garamond, Times New Roman, serif", margin: 0 }}>
                Our Services
              </p>
              <span style={{ width: "28px", height: "1px", backgroundColor: "#eab308" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: "600", color: "#1a1a1a", fontFamily: "Playfair Display, Georgia, serif" }}>
              Premium Hotel Services
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                image: dining,
                title: "Restaurant",
                desc: "Savor authentic Nigerian cuisine and international dishes crafted by our expert chefs in an elegant dining atmosphere.",
                link: "/restaurant",
              },
              {
                image: fitness2,
                title: "Fitness Center",
                desc: "Stay active during your stay with our fully equipped modern gym, open around the clock for your convenience.",
                link: "/services#fitness",
              },
              {
                image: pool,
                title: "Swimming Pool",
                desc: "Unwind and relax by our pristine swimming pool, the perfect escape after a long day of business or leisure.",
                link: "/services#pool",
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "380px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector(".service-img");
                  if (img) img.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector(".service-img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  className="service-img"
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px",
                  }}
                >
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "22px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      fontFamily: "Playfair Display, Georgia, serif",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      marginBottom: "16px",
                      fontFamily: "Cormorant Garamond, Times New Roman, serif",
                    }}
                  >
                    {service.desc}
                  </p>
                  <Link
                    to={service.link}
                    style={{
                      color: "#eab308",
                      fontSize: "13px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      textDecoration: "none",
                      borderBottom: "1px solid #eab308",
                      paddingBottom: "4px",
                      display: "inline-block",
                    }}
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rooms Section - Professional Slide-Up Style */}
      <div style={{ padding: "100px 24px", backgroundColor: "#f8f6f3" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "#eab308",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  color: "#eab308",
                  fontSize: "15px",
                  fontWeight: "500",
                  fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  margin: 0,
                }}
              >
                Rooms
              </p>
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "#eab308",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "600",
                color: "#1a1a1a",
                fontFamily: "Playfair Display, Georgia, serif",
                marginBottom: "16px",
              }}
            >
              Our Rooms
            </h2>
            <p
              style={{
                color: "#555555",
                fontSize: "15px",
                lineHeight: 1.8,
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              Step into comfort and convenience in our beautifully appointed
              rooms, designed to make your stay truly relaxing.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {rooms.map((room, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  border: "1px solid rgba(0,0,0,0.04)",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0,0,0,0.15)";
                  const panel = e.currentTarget.querySelector(
                    ".room-details-panel",
                  );
                  if (panel) {
                    panel.style.transform = "translateY(0)";
                    panel.style.opacity = "1";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.08)";
                  const panel = e.currentTarget.querySelector(
                    ".room-details-panel",
                  );
                  if (panel) {
                    panel.style.transform = "translateY(100%)";
                    panel.style.opacity = "0";
                  }
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "260px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />

                  <div
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      right: "20px",
                      color: "#ffffff",
                      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      zIndex: 2,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        fontFamily: "Playfair Display, Georgia, serif",
                        marginBottom: "4px",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {room.name}
                    </h3>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                      zIndex: 1,
                    }}
                  />
                </div>

                <div
                  className="room-details-panel"
                  style={{
                    padding: "20px 24px 24px",
                    backgroundColor: "#ffffff",
                    transform: "translateY(100%)",
                    opacity: "0",
                    transition:
                      "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
                    position: "relative",
                    zIndex: 3,
                    marginTop: "-20px",
                    borderTop: "3px solid #eab308",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        color: "#888888",
                        fontSize: "14px",
                        fontFamily:
                          "Cormorant Garamond, Times New Roman, serif",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ fontSize: "16px" }}>🛏</span> {room.bed}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ fontSize: "16px" }}>👤</span>{" "}
                        {room.guests}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#eab308",
                        fontFamily:
                          "Cormorant Garamond, Times New Roman, serif",
                      }}
                    >
                      {room.price}
                    </div>
                  </div>

                  <Link
                    to={`/booking?room=${encodeURIComponent(room.name)}`}
                    style={{
                      display: "inline-block",
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: "#eab308",
                      color: "#000000",
                      padding: "10px 0",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      textDecoration: "none",
                      transition: "background-color 0.3s ease",
                      fontFamily: "Cormorant Garamond, Times New Roman, serif",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#d4a308")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#eab308")
                    }
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Grid */}
      <div style={{ padding: "100px 24px", backgroundColor: "#f9f9f7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "12px" }}>
              <span style={{ width: "28px", height: "1px", backgroundColor: "#eab308" }} />
              <p style={{ fontStyle: "italic", color: "#eab308", fontSize: "15px", fontWeight: "500", fontFamily: "Cormorant Garamond, Times New Roman, serif", margin: 0 }}>
                Stay Connected
              </p>
              <span style={{ width: "28px", height: "1px", backgroundColor: "#eab308" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: "600", color: "#1a1a1a", fontFamily: "Playfair Display, Georgia, serif", marginBottom: "12px" }}>
              Follow Us on Social Platforms
            </h2>
            <a
              href="https://www.instagram.com/julicishotelandsuites"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#eab308",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                fontFamily: "Cormorant Garamond, Times New Roman, serif",
              }}
            >
              <Camera size={16} /> @julicishotelandsuites
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "4px",
            }}
          >
            {[social1, social2, social3, social4, social5, social6].map((img, index) => {
              const imageUrl = img;
              return (
                <a
                  key={index}
                  href="https://www.instagram.com/julicishotelandsuites"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    display: "block",
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`Social post ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(234,179,8,0)",
                      transition: "background-color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(234,179,8,0.7)";
                      const img = e.currentTarget.parentElement.querySelector('img');
                      if (img) img.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(234,179,8,0)";
                      const img = e.currentTarget.parentElement.querySelector('img');
                      if (img) img.style.transform = "scale(1)";
                    }}
                  >
                    <Camera size={22} color="#ffffff" style={{ opacity: 0, transition: "opacity 0.3s ease" }} 
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonial Section - Carousel Style */}
      <div style={{ padding: "100px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "#eab308",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  color: "#eab308",
                  fontSize: "15px",
                  fontWeight: "500",
                  fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  margin: 0,
                }}
              >
                Testimonial
              </p>
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "#eab308",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "600",
                color: "#1a1a1a",
                fontFamily: "Playfair Display, Georgia, serif",
              }}
            >
              What Our Client Say
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {/* Main Testimonial Display */}
            <div
              style={{
                backgroundColor: "#f9f9f7",
                borderRadius: "12px",
                padding: "40px 24px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
                textAlign: "center",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Star Ratings */}
              <div
                style={{
                  marginBottom: "16px",
                  color: "#eab308",
                  fontSize: "20px",
                  letterSpacing: "3px",
                }}
              >
                {"★".repeat(testimonials[currentTestimonial].rating)}
              </div>

              <div style={{ marginBottom: "12px" }}>
                <span
                  style={{
                    color: "#eab308",
                    fontSize: "36px",
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                  }}
                >
                  "
                </span>
              </div>
              <p
                style={{
                  color: "#444444",
                  fontSize: "clamp(16px, 2vw, 20px)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                  fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  fontStyle: "italic",
                  maxWidth: "700px",
                  margin: "0 auto 20px",
                }}
              >
                {testimonials[currentTestimonial].text}
              </p>
              <div>
                <h4
                  style={{
                    fontSize: "clamp(18px, 2vw, 20px)",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    fontFamily: "Playfair Display, Georgia, serif",
                    marginBottom: "2px",
                  }}
                >
                  {testimonials[currentTestimonial].name}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#888888",
                    fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  }}
                >
                  {testimonials[currentTestimonial].title}
                </p>
              </div>
            </div>

            {/* Left Arrow - Mobile Friendly */}
            <button
              onClick={prevTestimonial}
              style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#eab308";
                e.currentTarget.style.transform =
                  "translateY(-50%) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              ‹
            </button>

            {/* Right Arrow - Mobile Friendly */}
            <button
              onClick={nextTestimonial}
              style={{
                position: "absolute",
                right: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#eab308";
                e.currentTarget.style.transform =
                  "translateY(-50%) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              ›
            </button>

            {/* Dots Indicator */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "30px",
              }}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor:
                      index === currentTestimonial ? "#eab308" : "#dddddd",
                    cursor: "pointer",
                    padding: 0,
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
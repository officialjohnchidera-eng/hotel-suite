import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const guestServices = [
    "24/7 Front Desk",
    "Parking",
    "Room Service",
    "Free Wi-Fi",
    "Concierge Service",
  ];

  const socialLinks = [
    { name: "WhatsApp", url: "https://wa.me/2348061706684" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/julicishotelandsuites",
    },
    { name: "Facebook", url: "https://www.facebook.com/share/191Jdnu8H5/" },
    { name: "Tiktok", url: "http://www.tiktok.com/@julicis.hotel.and.suite" },
    { name: "X", url: "https://x.com/julicishotels" },
    { name: "Thread", url: "https://www.threads.com/@julicishotelandsuites" },
    { name: "Snapchat", url: "https://www.snapchat.com/add/julicishotels" },
  ];

  const linkStyle = {
    color: "#9ca3af",
    fontSize: "16px",
    textDecoration: "none",
    transition: "color 0.3s ease",
    fontFamily: "Cormorant Garamond, Times New Roman, serif",
  };

  const headingStyle = {
    color: "#ffffff",
    fontSize: "19px",
    fontWeight: "600",
    marginBottom: "20px",
    fontFamily: "Playfair Display, Georgia, serif",
    letterSpacing: "0.02em",
  };

  return (
    <footer style={{ backgroundColor: "#0f0f0f" }}>
      <style>{`
        .jul-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
          text-align: left;
        }
        .jul-footer-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .jul-footer-bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .jul-footer-social {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        @media (max-width: 880px) {
          .jul-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px;
            text-align: left;
          }
          .jul-footer-col {
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .jul-footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }
          .jul-footer-col {
            align-items: center;
          }
          .jul-footer-col .contact-li {
            justify-content: center;
            text-align: center;
          }
          .jul-footer-col .contact-li span {
            text-align: center;
          }
          .jul-footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          .jul-footer-social {
            justify-content: center;
            gap: 12px;
          }
          .jul-footer-social a {
            font-size: 13px !important;
          }
          .jul-footer-col .brand-description {
            text-align: center;
            max-width: 100% !important;
          }
          .jul-footer-col ul {
            align-items: center;
          }
          .jul-footer-col ul li {
            text-align: center;
          }
          .jul-footer-col .contact-list {
            align-items: center;
            max-width: 100% !important;
          }
        }

        @media (max-width: 400px) {
          .jul-footer-social {
            gap: 8px;
          }
          .jul-footer-social a {
            font-size: 12px !important;
          }
          .jul-footer-bottom p {
            font-size: 13px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 24px 50px",
        }}
      >
        <div className="jul-footer-grid">
          {/* Brand Column */}
          <div className="jul-footer-col">
            <h3
              style={{
                color: "#ffffff",
                fontSize: "clamp(20px, 2.5vw, 24px)",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "18px",
                fontFamily: "Playfair Display, Georgia, serif",
                textAlign: "center",
              }}
            >
              Golden Bella Hotels and Suites
            </h3>
            <p
              className="brand-description"
              style={{
                color: "#9ca3af",
                fontSize: "clamp(15px, 1.5vw, 16px)",
                lineHeight: 1.8,
                fontFamily: "Cormorant Garamond, Times New Roman, serif",
                maxWidth: "280px",
              }}
            >
              Hospitality is more than just a comfortable bed, it's creating a
              place where you feel genuinely at ease, cared for, and completely
              yourself.
            </p>
          </div>

          {/* Quick Links */}
          <div className="jul-footer-col">
            <h4 style={{ ...headingStyle, textAlign: "center" }}>
              Quick Links
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: "100%",
              }}
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ ...linkStyle, display: "inline-block" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#eab308")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#9ca3af")
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guest Services */}
          <div className="jul-footer-col">
            <h4 style={{ ...headingStyle, textAlign: "center" }}>
              Guest Services
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: "100%",
              }}
            >
              {guestServices.map((service) => (
                <li key={service}>
                  <span style={linkStyle}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="jul-footer-col">
            <h4 style={{ ...headingStyle, textAlign: "center" }}>Contact Us</h4>
            <ul
              className="contact-list"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
                maxWidth: "260px",
                alignItems: "flex-start",
              }}
            >
              <li
                className="contact-li"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <Phone
                  size={18}
                  color="#eab308"
                  style={{ marginTop: "2px", flexShrink: 0 }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span style={linkStyle}>+234 806 170 6684</span>
                  <span style={linkStyle}>+234 806 170 6684</span>
                </div>
              </li>
              <li
                className="contact-li"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <Mail
                  size={18}
                  color="#eab308"
                  style={{ marginTop: "2px", flexShrink: 0 }}
                />
                <span style={linkStyle}>info@goldenbellahotelsandsuites.com</span>
              </li>
              <li
                className="contact-li"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <MapPin
                  size={18}
                  color="#eab308"
                  style={{ marginTop: "2px", flexShrink: 0 }}
                />
                <span style={linkStyle}>
                  125, Kirikiri Road, Olodi Apapa, Lagos Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "22px 24px",
        }}
      >
        <div
          className="jul-footer-bottom"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              fontSize: "clamp(13px, 1.2vw, 15px)",
              fontFamily: "Cormorant Garamond, Times New Roman, serif",
              textAlign: "center",
            }}
          >
            Copyright {new Date().getFullYear()} Julicis Hotel | Developed by
            BuxOne Ltd
          </p>

          <div className="jul-footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9ca3af",
                  fontSize: "clamp(13px, 1.2vw, 15px)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#eab308")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

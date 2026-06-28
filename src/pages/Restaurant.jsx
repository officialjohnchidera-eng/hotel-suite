import dineRoom from "../assets/images/dineRoom.jpg";
import MenuTabs from "../components/MenuTabs";
import dining from "../assets/images/dining.jpg";
import gallery1 from "../assets/images/15129348745018470.jpg";
import gallery2 from "../assets/images/430023464444141838.jpg";
import gallery3 from "../assets/images/5207355814916294.jpg";
import gallery4 from "../assets/images/55239532924383509.jpg";
import gallery5 from "../assets/images/62909726040863702.jpg";
import gallery6 from "../assets/images/6473993212477414.jpg";
import gallery7 from "../assets/images/80150068363745696.jpg";
import grilledchicken from "../assets/images/grilledchicken.jpg";
import jollofRice from "../assets/images/jollofRice.jpg";
import nkwobi1 from "../assets/images/nkwobi1.jpg";
import abacha from "../assets/images/abacha.jpg";
import foodVariety from "../assets/images/foodVariety.jpg";
import PhotoGallery from "../components/PhotoGallery";

const galleryImages = [
  dineRoom,
  dining,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  grilledchicken,
  jollofRice,
  nkwobi1,
];

const Restaurant = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "350px",
          backgroundImage: `url(${dineRoom})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />
        <div
          style={{
            position: "relative",
            textAlign: "center",
            padding: "0 24px",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "16px",
              fontFamily: "Playfair Display, Georgia, serif",
            }}
          >
            Restaurant
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "15px",
              letterSpacing: "0.05em",
              fontFamily: "Cormorant Garamond, Times New Roman, serif",
            }}
          >
            Indulge in culinary excellence, crafted to satisfy every craving.
          </p>
        </div>
      </div>

      {/* Info & Hours Section */}
      <div style={{ padding: "100px 24px", backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left - Description */}
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
              Our Restaurant
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
              A Taste of Home and Beyond
            </h2>

            <p
              style={{
                color: "#555555",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              At Golden Bella Hotels and Suites, our restaurant brings together
              the warmth of traditional Nigerian cooking and the elegance of
              fine dining. Every dish is prepared with fresh ingredients and
              authentic spices, served in a relaxed and welcoming atmosphere.
            </p>

            <p
              style={{
                color: "#555555",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              Whether you're starting your day with a hearty breakfast or
              unwinding with a peppered delicacy in the evening, our kitchen is
              dedicated to giving you a memorable culinary experience.
            </p>
          </div>

          {/* Right - Opening Hours */}
          <div
            style={{
              flex: "1 1 320px",
              backgroundColor: "#0f0f0f",
              borderRadius: "12px",
              padding: "40px 36px",
            }}
          >
            <h3
              style={{
                color: "#eab308",
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "24px",
                fontFamily: "Playfair Display, Georgia, serif",
              }}
            >
              Opening Hours
            </h3>

            {[
              { day: "Monday - Friday", time: "7:00 AM - 10:00 PM" },
              { day: "Saturday", time: "7:00 AM - 11:00 PM" },
              { day: "Sunday", time: "8:00 AM - 10:00 PM" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom:
                    index !== 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  }}
                >
                  {item.day}
                </span>
                <span
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    fontFamily: "Cormorant Garamond, Times New Roman, serif",
                  }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <PhotoGallery images={galleryImages} />

      {/* Menu Tabs */}
      <MenuTabs />
    </div>
  );
};

export default Restaurant;

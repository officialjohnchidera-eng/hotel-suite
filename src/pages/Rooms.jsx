import { Link } from "react-router-dom";
import { roomsData } from "../data/roomsData";

const Rooms = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "40vh",
          minHeight: "300px",
          backgroundColor: "#0f0f0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", padding: "0 24px" }}>
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
            Our Rooms
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "15px",
              letterSpacing: "0.05em",
              fontFamily: "Cormorant Garamond, Times New Roman, serif",
            }}
          >
            Find the perfect room for your stay at Golden Bella Hotels and
            Suites.
          </p>
        </div>
      </div>

      {/* Rooms Grid */}
      <div style={{ padding: "100px 24px", backgroundColor: "#f8f6f3" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {roomsData.map((room, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ height: "240px", overflow: "hidden" }}>
                  <img
                    src={room.image}
                    alt={room.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                      gap: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        margin: 0,
                        fontFamily: "Playfair Display, Georgia, serif",
                      }}
                    >
                      {room.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "#eab308",
                        whiteSpace: "nowrap",
                        fontFamily:
                          "Cormorant Garamond, Times New Roman, serif",
                      }}
                    >
                      {room.price}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#777777",
                      lineHeight: 1.7,
                      marginBottom: "14px",
                      fontFamily: "Cormorant Garamond, Times New Roman, serif",
                    }}
                  >
                    {room.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      color: "#888888",
                      fontSize: "14px",
                      marginBottom: "20px",
                      fontFamily: "Cormorant Garamond, Times New Roman, serif",
                    }}
                  >
                    <span>{room.bed}</span>
                    <span>{room.guests}</span>
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <Link
                      to={`/rooms/${room.slug}`}
                      style={{
                        flex: 1,
                        textAlign: "center",
                        border: "1px solid #1a1a1a",
                        color: "#1a1a1a",
                        padding: "10px 0",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        textDecoration: "none",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                        fontFamily:
                          "Cormorant Garamond, Times New Roman, serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#1a1a1a";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#1a1a1a";
                      }}
                    >
                      Discover More
                    </Link>

                    <Link
                      to={`/booking?room=${encodeURIComponent(room.name)}`}
                      style={{
                        flex: 1,
                        textAlign: "center",
                        backgroundColor: "#eab308",
                        color: "#000000",
                        padding: "10px 0",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease",
                        fontFamily:
                          "Cormorant Garamond, Times New Roman, serif",
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

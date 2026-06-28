import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Copy,
  Check,
  MessageCircle,
  Shield,
  CreditCard,
  Clock,
  AlertCircle,
} from "lucide-react";
import { roomsData } from "../data/roomsData";

// Use an online image instead of local file
const paymentBanner = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200";

const WHATSAPP_NUMBER = '2348061706684'

const bankDetails = {
  accountName: "Golden Bella Hotel & Suites",
  accountNumber: "2048895323",
  bankName: "First Bank of Nigeria",
};

// Converts a price string like "₦55,000.00" into a real number: 55000
const parsePrice = (priceString) => {
  if (!priceString) return 0;
  return parseFloat(priceString.replace(/[₦,]/g, "")) || 0;
};

// Calculates number of nights between two date strings, returns 0 if invalid
const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end - start;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
};

// Formats a number as Nigerian Naira currency
const formatNaira = (amount) => {
  return (
    "₦" +
    amount.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roomName = searchParams.get("room") || "Selected Room";
  const checkIn = searchParams.get("check_in") || "";
  const checkOut = searchParams.get("check_out") || "";
  const adults = searchParams.get("adults") || "1";
  const children = searchParams.get("children") || "0";
  const name = searchParams.get("name") || "";

  // Find the matching room to get its actual price
  const matchedRoom = roomsData.find((room) => room.name === roomName);
  const pricePerNight = matchedRoom ? parsePrice(matchedRoom.price) : 0;
  const nights = calculateNights(checkIn, checkOut);
  const totalAmount = pricePerNight * nights;

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = `Hi, I just made a bank transfer for my booking at Golden Bella Hotels and Suites.

Name: ${name || "[Your Name]"}
Room: ${roomName}
Check-in: ${checkIn || "[date]"}
Check-out: ${checkOut || "[date]"}
Guests: ${adults} Adult(s), ${children} Child(ren)
Nights: ${nights}
Total Amount: ${nights > 0 ? formatNaira(totalAmount) : "[to be confirmed]"}

I'm attaching my payment receipt below.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  // Loading effect for premium feel
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "#f8f9fa",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "3px solid #e5e7eb",
            borderTop: "3px solid #eab308",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Premium Hero Section with Image Background */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "350px",
          backgroundImage: `url(${paymentBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Dark Overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Luxury Background Ornaments */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40%",
            left: "-10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(234,179,8,0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Gold Decorative Lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #eab308, #f59e0b, #eab308, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(234,179,8,0.3), transparent)",
          }}
        />

        <div
          style={{
            textAlign: "center",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Premium Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 16px",
              border: "1px solid rgba(234, 179, 8, 0.25)",
              borderRadius: "100px",
              marginBottom: "20px",
              backgroundColor: "rgba(234, 179, 8, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Shield size={12} color="#eab308" />
            <span
              style={{
                color: "#eab308",
                fontSize: "9px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Secure Payment Gateway
            </span>
          </div>

          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "300",
              letterSpacing: "-0.02em",
              marginBottom: "8px",
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 1.1,
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Complete Your
            <br />
            <span style={{ color: "#eab308", fontWeight: "600" }}>
              Reservation
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
              fontWeight: "300",
              letterSpacing: "0.05em",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 1px 10px rgba(0,0,0,0.2)",
            }}
          >
            Complete your booking with a secure bank transfer
          </p>

          {/* Decorative Gold Diamond */}
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "1px",
                background: "rgba(234,179,8,0.3)",
                alignSelf: "center",
              }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                background: "#eab308",
                transform: "rotate(45deg)",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                width: "30px",
                height: "1px",
                background: "rgba(234,179,8,0.3)",
                alignSelf: "center",
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content - Premium Layout */}
      <div style={{ padding: "40px 24px 60px", backgroundColor: "#f7f8fa" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Booking Summary - Glassmorphism Card */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "28px 28px",
              marginBottom: "24px",
              boxShadow:
                "0 20px 60px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.02)",
              border: "1px solid rgba(255,255,255,0.8)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "18px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #eab308, #f59e0b)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.9,
                  }}
                >
                  <CreditCard size={16} color="#ffffff" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#1a1a1a",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Booking Summary
                  </h3>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#9ca3af",
                      margin: "1px 0 0 0",
                    }}
                  >
                    Review your reservation details
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: "600",
                  color: "#eab308",
                  backgroundColor: "rgba(234, 179, 8, 0.1)",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  border: "1px solid rgba(234, 179, 8, 0.15)",
                }}
              >
                Awaiting Payment
              </span>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Room Type
                </span>
                <span
                  style={{
                    color: "#1a1a1a",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {roomName}
                </span>
              </div>
              {checkIn && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  <span
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    Check-in
                  </span>
                  <span
                    style={{
                      color: "#1a1a1a",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {checkIn}
                  </span>
                </div>
              )}
              {checkOut && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  <span
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    Check-out
                  </span>
                  <span
                    style={{
                      color: "#1a1a1a",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {checkOut}
                  </span>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Guests
                </span>
                <span
                  style={{
                    color: "#1a1a1a",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {adults} Adult{adults > 1 ? "s" : ""}
                  {children > 0
                    ? `, ${children} Child${children > 1 ? "ren" : ""}`
                    : ""}
                </span>
              </div>
            </div>

            {/* Premium Price Breakdown */}
            {nights > 0 && pricePerNight > 0 ? (
              <div
                style={{
                  marginTop: "18px",
                  paddingTop: "18px",
                  borderTop: "2px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "#6b7280",
                    marginBottom: "6px",
                  }}
                >
                  <span>
                    Rate × {nights} {nights === 1 ? "Night" : "Nights"}
                  </span>
                  <span>{formatNaira(totalAmount)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    marginTop: "12px",
                    paddingTop: "12px",
                    borderTop: "1px solid #f0f0f0",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#6b7280",
                    }}
                  >
                    Total Due
                  </span>
                  <span
                    style={{
                      background: "linear-gradient(135deg, #eab308, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "22px",
                    }}
                  >
                    {formatNaira(totalAmount)}
                  </span>
                </div>
              </div>
            ) : (
              <div
                style={{
                  marginTop: "16px",
                  padding: "12px 16px",
                  backgroundColor: "#fef2f2",
                  borderRadius: "10px",
                  border: "1px solid #fecaca",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <AlertCircle size={14} color="#dc2626" />
                <span
                  style={{
                    fontSize: "11px",
                    color: "#991b1b",
                    fontWeight: "400",
                  }}
                >
                  Please provide check-in and check-out dates to calculate your
                  total.
                </span>
              </div>
            )}
          </div>

          {/* Bank Details - Premium Dark Card with Gold Accents */}
          <div
            style={{
              background: "linear-gradient(160deg, #0f0f0f 0%, #1a1a1a 100%)",
              borderRadius: "16px",
              padding: "32px 28px",
              marginBottom: "24px",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255,255,255,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Premium Background Accent */}
            <div
              style={{
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, rgba(234,179,8,0.03) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "22px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, rgba(234,179,8,0.15), rgba(234,179,8,0.05))",
                  border: "1px solid rgba(234,179,8,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "18px" }}>🏛️</span>
              </div>
              <div>
                <p
                  style={{
                    color: "#eab308",
                    fontSize: "9px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    margin: 0,
                  }}
                >
                  Bank Transfer Details
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "11px",
                    margin: "1px 0 0 0",
                  }}
                >
                  Make payment to the account below
                </p>
              </div>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "11px",
                    fontWeight: "400",
                    letterSpacing: "0.02em",
                  }}
                >
                  Account Name
                </span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.02em",
                  }}
                >
                  {bankDetails.accountName}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "11px",
                    fontWeight: "400",
                    letterSpacing: "0.02em",
                  }}
                >
                  Bank
                </span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.02em",
                  }}
                >
                  {bankDetails.bankName}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "none",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "11px",
                    fontWeight: "400",
                    letterSpacing: "0.02em",
                  }}
                >
                  Account Number
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "0.08em",
                      fontFamily: "'Inter', monospace",
                      background: "rgba(255,255,255,0.03)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {bankDetails.accountNumber}
                  </span>
                  <button
                    onClick={handleCopy}
                    style={{
                      background: copied ? "#16a34a" : "rgba(234, 179, 8, 0.1)",
                      border: "1px solid rgba(234,179,8,0.15)",
                      borderRadius: "8px",
                      padding: "8px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      width: "34px",
                      height: "34px",
                    }}
                    onMouseEnter={(e) => {
                      if (!copied) {
                        e.currentTarget.style.background =
                          "rgba(234, 179, 8, 0.2)";
                        e.currentTarget.style.borderColor =
                          "rgba(234,179,8,0.3)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!copied) {
                        e.currentTarget.style.background =
                          "rgba(234, 179, 8, 0.1)";
                        e.currentTarget.style.borderColor =
                          "rgba(234,179,8,0.15)";
                      }
                    }}
                  >
                    {copied ? (
                      <Check size={14} color="#ffffff" />
                    ) : (
                      <Copy size={14} color="#eab308" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Footer Line */}
            <div
              style={{
                marginTop: "18px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255,255,255,0.04)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Clock size={12} color="rgba(255,255,255,0.2)" />
              <span
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "10px",
                  fontWeight: "300",
                  letterSpacing: "0.02em",
                }}
              >
                Payment confirmation within 24 hours
              </span>
            </div>
          </div>

          {/* Instructions - Premium Alert */}
          <div
            style={{
              padding: "16px 20px",
              background: "linear-gradient(135deg, #fffbeb, #fef3c7)",
              borderRadius: "12px",
              marginBottom: "24px",
              border: "1px solid rgba(234, 179, 8, 0.2)",
              boxShadow: "0 2px 8px rgba(234, 179, 8, 0.06)",
            }}
          >
            <div
              style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
            >
              <div
                style={{
                  minWidth: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "rgba(234, 179, 8, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "14px" }}>💡</span>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#78350f",
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: "400",
                  }}
                >
                  {nights > 0 ? (
                    <>
                      Transfer{" "}
                      <strong style={{ color: "#eab308" }}>
                        {formatNaira(totalAmount)}
                      </strong>{" "}
                      to the account above. After payment, click the WhatsApp
                      button below to send your receipt. We'll confirm your
                      booking within <strong>24 hours</strong>.
                    </>
                  ) : (
                    <>
                      Complete your transfer and click the WhatsApp button below
                      to send your payment receipt. We'll confirm your booking
                      as soon as we verify your payment.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA - Premium Button with Gradient */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              background: "linear-gradient(135deg, #25D366 0%, #1ebe57 100%)",
              color: "#ffffff",
              padding: "16px 0",
              borderRadius: "12px",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 8px 32px rgba(37, 211, 102, 0.3)",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.01)";
              e.currentTarget.style.boxShadow =
                "0 12px 48px rgba(37, 211, 102, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(37, 211, 102, 0.3)";
            }}
          >
            {/* Premium Shine Effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                transition: "all 0.6s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.left = "100%")}
              onMouseLeave={(e) => (e.currentTarget.style.left = "-100%")}
            />
            <MessageCircle size={18} color="#ffffff" />
            <span>Send Receipt via WhatsApp</span>
          </a>

          {/* Footer Section - Premium */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
              marginTop: "28px",
              paddingTop: "22px",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <Link
              to="/contact"
              style={{
                color: "#6b7280",
                fontSize: "11px",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#eab308";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6b7280";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "14px" }}>✉️</span>
              Need Help?
            </Link>
            <span style={{ color: "#d1d5db", fontSize: "11px" }}>•</span>
            <Link
              to="/"
              style={{
                color: "#6b7280",
                fontSize: "11px",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#eab308";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6b7280";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ← Back to Home
            </Link>
          </div>

          {/* Security Badge - Premium */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: "22px",
              padding: "10px 20px",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.8)",
            }}
          >
            <Shield size={14} color="#9ca3af" />
            <span
              style={{
                color: "#9ca3af",
                fontSize: "10px",
                fontWeight: "400",
                letterSpacing: "0.03em",
              }}
            >
              Your payment is secure & encrypted
            </span>
            <span style={{ color: "#e5e7eb", fontSize: "10px" }}>•</span>
            <span
              style={{
                color: "#9ca3af",
                fontSize: "10px",
                fontWeight: "400",
                letterSpacing: "0.03em",
              }}
            >
              SSL Protected
            </span>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Payment;
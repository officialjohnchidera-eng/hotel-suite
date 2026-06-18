import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef(null)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const showSolidBg = !isHome || scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll() // catch the case where you land mid-scroll or switch routes already scrolled
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
    {
      name: 'Rooms',
      path: '/rooms',
      dropdown: [
        { name: 'Standard Room', path: '/rooms/standard' },
        { name: 'Classic Room', path: '/rooms/classic' },
        { name: 'Deluxe Room', path: '/rooms/deluxe' },
        { name: 'Luxury Room', path: '/rooms/luxury' },
        { name: 'Royale Suite', path: '/rooms/royale-suite' },
      ],
    },
    {
      name: 'Recreation',
      path: '/services#recreation',
      dropdown: [
        { name: 'Gym', path: '/services#gym' },
        { name: 'Tennis Court', path: '/services#tennis' },
        { name: 'Swimming Pool', path: '/services#pool' },
        { name: 'Fitness Center', path: '/services#fitness' },
      ],
    },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Restaurant', path: '/services#restaurant' },
        { name: 'Conference Hall', path: '/services#conference' },
      ],
    },
  ]

  const DropdownBox = ({ items, name }) => {
    const isActive = activeDropdown === name

    return (
      <div
        onMouseEnter={() => handleMouseEnter(name)}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          width: '230px',
          paddingTop: '12px',
          zIndex: 99999,
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.06)',
            display: 'grid',
            gridTemplateRows: isActive ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div style={{ overflow: 'hidden', minHeight: 0 }}>
            <div style={{ padding: '8px 0' }}>
              {items.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    display: 'block',
                    padding: '14px 24px',
                    color: '#1a1a1a',
                    fontSize: '11px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    borderBottom: index !== items.length - 1 ? '1px solid #f3f4f6' : 'none',
                    transform: isActive ? 'translateY(0)' : 'translateY(6px)',
                    opacity: isActive ? 1 : 0,
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    transition: `
                      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.04}s,
                      opacity 0.4s ease ${index * 0.04}s,
                      padding-left 0.3s ease,
                      color 0.2s ease,
                      background-color 0.2s ease
                    `,
                    willChange: 'transform, opacity',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.paddingLeft = '32px'
                    e.currentTarget.style.color = '#b8860b'
                    e.currentTarget.style.backgroundColor = '#fefce8'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.paddingLeft = '24px'
                    e.currentTarget.style.color = '#1a1a1a'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <nav 
      className="fixed top-0 left-0 w-full"
      style={{ 
        position: 'fixed', 
        zIndex: 9999,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: showSolidBg ? 'rgba(26, 26, 26, 0.96)' : 'transparent',
        boxShadow: showSolidBg ? '0 4px 24px rgba(0,0,0,0.25)' : 'none',
        backdropFilter: showSolidBg ? 'blur(10px)' : 'none',
        transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      <div className="hidden md:flex items-center justify-between px-10 max-w-7xl mx-auto relative w-full">
        {/* Left Side Links */}
        <ul className="flex items-center gap-8 w-1/3">
          {navLinks.slice(0, 2).map(link => (
            <li
              key={link.name}
              style={{ 
                position: 'relative',
              }}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
              className="py-1"
            >
              <Link
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  textDecoration: 'none',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  transition: 'color 0.3s ease',
                }}
                className="hover:text-yellow-500"
              >
                {link.name}
                <ChevronDown
                  size={12}
                  style={{
                    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                    transform: activeDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </Link>
              <DropdownBox items={link.dropdown} name={link.name} />
            </li>
          ))}
        </ul>

        {/* Brand Center Identity */}
        <div 
          style={{
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '300',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            textAlign: 'center',
            fontFamily: 'Playfair Display, Georgia, serif',
          }}
        >
          Julicis Hotel & Suites
        </div>

        {/* Right Side Links */}
        <ul className="flex items-center justify-end gap-8 w-1/3">
          {navLinks.slice(2).map(link => (
            <li
              key={link.name}
              style={{ 
                position: 'relative',
              }}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
              className="py-1"
            >
              <Link
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  textDecoration: 'none',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  transition: 'color 0.3s ease',
                }}
                className="hover:text-yellow-500"
              >
                {link.name}
                <ChevronDown
                  size={12}
                  style={{
                    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                    transform: activeDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </Link>
              <DropdownBox items={link.dropdown} name={link.name} />
            </li>
          ))}

          {/* Call To Action - Book Now with adjusted size and curves */}
          <li>
            <Link
              to="/rooms"
              className="relative overflow-hidden group inline-block"
              style={{
                backgroundColor: '#eab308',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                padding: '12px 24px',
                borderRadius: '8px',
                minWidth: '100px',
                transition: 'all 0.3s ease',
              }}
            >
              <span 
                className="block text-black text-xs font-large capitalize tracking-widest transition-transform duration-300 ease-in-out group-hover:-translate-y-8"
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                }}
              >
                Book Now
              </span>
              <span 
                className="absolute inset-0 flex items-center justify-center text-black text-xs font-medium capitalize tracking-widest transition-transform duration-300 ease-in-out translate-y-8 group-hover:translate-y-0"
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                }}
              >
                Book Now
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between px-6 w-full">
        <div 
          style={{
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '300',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontFamily: 'Playfair Display, Georgia, serif',
          }}
        >
          Julicis Hotel
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <div style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          width: '100%',
          maxHeight: isOpen ? '800px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease',
          pointerEvents: isOpen ? 'auto' : 'none',
          zIndex: 9998,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(8px)',
        }}
        className="md:hidden"
      >
        <div className="px-6">
          <ul className="flex flex-col gap-1 pb-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: '400',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    padding: '16px 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid #1a1a1a',
                    cursor: 'pointer',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                  }}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    style={{
                      transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                      transform: activeDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: activeDropdown === link.name ? '1fr' : '0fr',
                    opacity: activeDropdown === link.name ? 1 : 0,
                    transition: 'grid-template-rows 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden', minHeight: 0 }}>
                    {link.dropdown?.map(item => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => {
                          setIsOpen(false)
                          setActiveDropdown(null)
                        }}
                        style={{
                          display: 'block',
                          padding: '12px 0 12px 16px',
                          color: '#9ca3af',
                          fontSize: '12px',
                          fontWeight: '400',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          borderBottom: '1px solid #1a1a1a',
                          textDecoration: 'none',
                          fontFamily: 'Cormorant Garamond, Georgia, serif',
                          transition: 'padding-left 0.3s ease, color 0.2s ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.paddingLeft = '24px'
                          e.currentTarget.style.color = '#eab308'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.paddingLeft = '16px'
                          e.currentTarget.style.color = '#9ca3af'
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}

            <li className="mt-6">
              <Link
                to="/rooms"
                onClick={() => setIsOpen(false)}
                className="relative overflow-hidden group block w-full text-center rounded-sm py-3"
                style={{
                  backgroundColor: '#eab308',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                }}
              >
                <span 
                  className="block text-black text-xs font-medium capitalize tracking-widest transition-transform duration-300 ease-in-out group-hover:-translate-y-8"
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                  }}
                >
                  Book Now
                </span>
                <span 
                  className="absolute inset-0 flex items-center justify-center text-black text-xs font-medium capitalize tracking-widest transition-transform duration-300 ease-in-out translate-y-8 group-hover:translate-y-0"
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                  }}
                >
                  Book Now
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
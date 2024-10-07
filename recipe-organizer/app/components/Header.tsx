// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Mijn Recepten Organizer</h1>
      <nav>
        <Link href="/">
          <p style={linkStyle}>Home</p>
        </Link>
        <Link href="/recepten">
          <p style={linkStyle}>Recepten</p>
        </Link>
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: '1rem',
  backgroundColor: '#0070f3',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '1rem',
};

export default Header;

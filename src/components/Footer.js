import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
        <p>&copy; {currentYear} Flenny Scent Group, Everlasting Essence of Luxury.</p>
    </footer>
  );
}

export default Footer;

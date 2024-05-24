import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
        <p>&copy; {currentYear} Flenny Scent Group, Timeless Aromas, Lasting Impressions</p>
    </footer>
  );
}

export default Footer;

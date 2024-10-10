import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#343a40',
      color: '#ffffff',
      padding: '20px 0',
      textAlign: 'center',
      position: 'relative',
      bottom: 0,
      width: '100%',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    text: {
      margin: '5px 0',
      fontSize: '0.9rem',
      lineHeight: '1.5',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'underline',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#ffc107',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 Durga Pandal Locator. All rights reserved.</p>
        <p style={styles.text}>
          <a 
            href="/privacy-policy" // Placeholder URL
            style={styles.link} 
            onMouseOver={e => e.currentTarget.style.color = styles.linkHover.color} 
            onMouseOut={e => e.currentTarget.style.color = styles.link.color}
          >
            Privacy Policy
          </a>
        </p>
        <p style={styles.text}>Design and Developed by G Pie Software & Solution</p>
      </div>
    </footer>
  );
};

export default Footer;

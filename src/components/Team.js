import React from 'react';
import teamMember1 from '../Images/Person1.jpeg';
import teamMember2 from '../Images/Person2.png';
import websiteIcon from '../Icons/internet.png';
import linkedinIcon from '../Icons/linkedin.png';
import githubIcon from '../Icons/github.png';
import facebookIcon from '../Icons/facebook.png';
import twitterIcon from '../Icons/twitter.png';
import youtubeIcon from '../Icons/youtube.png';
import instagramIcon from '../Icons/instagram.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Gouranga Pal',
      role: 'Founder & CEO',
      photo: teamMember1,
      socialLinks: {
        website: 'https://gouranga.com',
        linkedin: 'https://linkedin.com/in/gouranga',
        github: 'https://github.com/gouranga',
        facebook: 'https://facebook.com/gouranga',
        twitter: 'https://twitter.com/gouranga',
        youtube: 'https://youtube.com/gouranga',
        instagram: 'https://instagram.com/gouranga',
      },
    },
    {
      name: 'Susmita Dhal',
      role: 'Co-Founder & CMO',
      photo: teamMember2,
      socialLinks: {
        website: 'https://susmita.com',
        linkedin: 'https://linkedin.com/in/susmita',
        github: 'https://github.com/susmita',
        facebook: 'https://facebook.com/susmita',
        twitter: 'https://twitter.com/susmita',
        youtube: 'https://youtube.com/susmita',
        instagram: 'https://instagram.com/susmita',
      },
    },
  ];

  const styles = {
    teamContainer: {
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f5f5f5',
    },
    teamHeader: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#4a4a4a',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    },
    teamGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    teamCard: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      width: '220px',
      textAlign: 'center',
    },
    teamImageContainer: {
      overflow: 'hidden',
      borderRadius: '10px 10px 0 0',
    },
    teamImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    teamInfo: {
      padding: '15px',
    },
    teamName: {
      fontSize: '1.2rem',
      fontWeight: '600',
      margin: '10px 0',
      color: '#333',
    },
    teamRole: {
      fontSize: '1rem',
      fontWeight: '400',
      color: '#777',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '10px',
    },
    socialIcon: {
      width: '20px',
      height: '20px',
    },
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.1)';
  };

  const handleImageHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleImageUnhover = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={styles.teamContainer}>
      <h2 style={styles.teamHeader}>Meet Our Team</h2>
      <div style={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={styles.teamCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.teamImageContainer}>
              <img
                src={member.photo}
                alt={member.name}
                style={styles.teamImage}
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageUnhover}
              />
            </div>

            <div style={styles.teamInfo}>
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
              <div style={styles.socialIcons}>
                {member.socialLinks.website && (
                  <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer">
                    <img src={websiteIcon} alt="Website" style={styles.socialIcon} />
                  </a>
                )}
                {member.socialLinks.linkedin && (
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" style={styles.socialIcon} />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" style={styles.socialIcon} />
                  </a>
                )}
                {member.socialLinks.facebook && (
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" style={styles.socialIcon} />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" style={styles.socialIcon} />
                  </a>
                )}
                {member.socialLinks.youtube && (
                  <a href={member.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" style={styles.socialIcon} />
                  </a>
                )}
                {member.socialLinks.instagram && (
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" style={styles.socialIcon} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

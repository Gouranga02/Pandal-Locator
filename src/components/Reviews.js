import React from 'react';
import user1 from '../Images/user1.jpg';
import user2 from '../Images/user2.jpg';
import user3 from '../Images/user3.jpeg';

const Reviews = () => {
  const reviews = [
    {
      name: 'User 1',
      comment: 'Amazing experience! The pandals were beautifully decorated.',
      rating: 5,
      image: user1,
    },
    {
      name: 'User 2',
      comment: 'Loved the ambiance and the cultural activities!',
      rating: 4,
      image: user2,
    },
    {
      name: 'User 3',
      comment: 'A must-visit during the Durga Puja festival!',
      rating: 4.5,
      image: user3,
    },
  ];

  // Render stars as a string based on the rating value
  const renderStars = (rating) => {
    const fullStars = '⭐'.repeat(Math.floor(rating));
    const halfStar = rating % 1 === 0.5 ? '⭐' : '';
    const emptyStars = '☆'.repeat(5 - Math.ceil(rating));

    return fullStars + halfStar + emptyStars;
  };

  const styles = {
    container: {
      backgroundColor: '#f9f9f9',
      padding: '40px 20px',
      borderRadius: '10px',
    },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: '40px',
      fontSize: '2rem',
      color: '#333',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    card: {
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      borderRadius: '10px',
      backgroundColor: '#fff',
      width: '300px',
      marginBottom: '20px',
      padding: '20px',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
    },
    cardBody: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    userImg: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    userName: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '5px',
      marginTop: '10px',
    },
    commentText: {
      fontStyle: 'italic',
      color: '#555',
      fontSize: '1rem',
      textAlign: 'center',
    },
    stars: {
      fontSize: '1.5rem',
      color: '#ffc107',
      marginTop: '5px',
    },
    ratingText: {
      fontSize: '1rem',
      color: '#666',
      marginTop: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.sectionTitle}>User Reviews</h3>
      <div style={styles.row}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card review-card"
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
          >
            <div style={styles.cardBody}>
              <img src={review.image} alt={review.name} style={styles.userImg} />
              <h5 style={styles.userName}>{review.name}</h5>
              <div style={styles.stars}>
                {renderStars(review.rating)}
              </div>
              <p style={styles.commentText}>"{review.comment}"</p>
              <p style={styles.ratingText}>{review.rating} {review.rating % 1 === 0 ? 'stars' : 'star'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

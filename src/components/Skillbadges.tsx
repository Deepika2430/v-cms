import React from 'react';

const skillBadges = [
  {
    title: 'Novice',
    image: 'https://vismayee.com/wp-content/uploads/2023/11/1B.svg',
  },
  {
    title: 'Beginner',
    image: 'https://vismayee.com/wp-content/uploads/2023/11/2B.svg',
  },
  {
    title: 'Competent',
    image: 'https://vismayee.com/wp-content/uploads/2023/11/3B.svg',
  },
  {
    title: 'Proficient',
    image: 'https://vismayee.com/wp-content/uploads/2023/11/4B.svg',
  },
  {
    title: 'Expert',
    image: 'https://vismayee.com/wp-content/uploads/2023/11/5B.svg',
  },
];

const SkillBadges = () => {
  return (
    <section
      className="skill-badges-section"
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2
        style={{
          color: '#651a8a',
          fontSize: '2.5rem',
          marginBottom: '20px',
        }}
      >
        Skill Badges
      </h2>
      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto 40px',
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#333',
        }}
      >
        Skill badges represent tangible and visual recognition of a learner’s achievements and proficiency in specific
        skills awarded upon the successful acquisition or demonstration of specific skills. These badges serve as digital
        credentials, providing a concise way to showcase one’s competencies.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
          justifyItems: 'center',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {skillBadges.map((badge, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              padding: '10px',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={badge.image}
              alt={badge.title}
              style={{
                width: '250px',
                height: '250px',
                objectFit: 'contain',
                marginBottom: '12px',
              }}
            />
            <h5
              style={{
                color: '#651a8a',
                fontSize: '1.2rem',
                margin: 0,
              }}
            >
              {badge.title}
            </h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillBadges;

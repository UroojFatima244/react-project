import React from 'react';
import './Aboutus.css';

const teamMembers = [
  {
    name: 'urooj fatima',
    role: 'Frontend Developer',
    image: 'https://i.pravatar.cc/150?img=32',
    bio: 'Passionate about UI/UX and React.js.',
  },
  {
    name: 'Huma Mir',
    role: 'Backend Developer',
    image: 'https://i.pravatar.cc/150?img=12',
    bio: 'Loves building APIs and working with Node.js.',
  },
  {
    name: 'Eman Noor',
    role: 'Project Manager',
    image: 'https://i.pravatar.cc/150?img=5',
    bio: 'Ensures smooth delivery and agile workflows.',
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Meet Our Team</h1>
      <div className="cards-container">
        {teamMembers.map((member, index) => (
          <div className="card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={member.image} alt={member.name} className="card-image" />
            <h2 className="card-name">{member.name}</h2>
            <p className="card-role">{member.role}</p>
            <p className="card-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

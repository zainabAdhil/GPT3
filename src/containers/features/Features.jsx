import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Healthcare Industry Transformation',
    text: 'Enhanced patient care and streamlined processes with GPT-3 in the healthcare industry.',
  },
  {
    title: 'Financial Sector Innovation',
    text: 'Automated analysis and personalized recommendations in finance with GPT-3.',
  },
  {
    title: 'Educational Enhancement',
    text: 'Interactive learning tools and personalized content creation powered by GPT-3.',
  },
  {
    title: 'Creative Content Generation',
    text: 'Revolutionized creative industries with AI-driven content creation by GPT-3.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
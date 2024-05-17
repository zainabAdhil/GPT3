import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, developed by OpenAI, is one of the most advanced language models available. It uses deep learning to generate human-like text based on given prompts. With 175 billion parameters, GPT-3 can perform diverse tasks such as text generation, translation, and question-answering, making it a versatile tool for developers and businesses." />
    </div>

    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Creates natural, human-like conversations, enhancing customer service and virtual assistant interactions with advanced contextual understanding." />
      <Feature title="Knowledgebase" text="Enables accurate information retrieval and detailed answers, improving the efficiency of intelligent support and search systems." />
      <Feature title="Education" text="Provides personalized learning experiences, generating interactive educational content and tutoring to enhance the educational process." />
    </div>
  </div>
);

export default WhatGPT3;
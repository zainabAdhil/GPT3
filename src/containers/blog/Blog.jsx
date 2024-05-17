import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 26, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Feb 10, 2024" text="Exploring the Potential of GPT-3 in Healthcare" />
        <Article imgUrl={blog03} date="March 15, 2024" text="Transforming Finance with GPT-3: Opportunities and Challenges" />
        <Article imgUrl={blog04} date="April 02, 2021" text="GPT-3: A Game-Changer in Education" />
        <Article imgUrl={blog05} date="May 17, 2021" text="Creative Insights: Leveraging GPT-3 for Content Creation" />
      </div>
    </div>
  </div>
);

export default Blog;
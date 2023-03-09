import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Aenean ac ornare quam, commodo aliquet metus. Etiam vel maximus enim. In viverra ut mauris eu condimentum. Pellentesque condimentum commodo nisi, vitae suscipit libero auctor ac. Aliquam lectus ipsum, dapibus molestie ullamcorper in." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla venenatis hendrerit. Phasellus tellus diam, pharetra imperdiet nulla." />
      <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla venenatis hendrerit. Phasellus tellus diam, pharetra imperdiet nulla." />
      <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla venenatis hendrerit. Phasellus tellus diam, pharetra imperdiet nulla." />
    </div>
  </div>
);

export default WhatGPT3;

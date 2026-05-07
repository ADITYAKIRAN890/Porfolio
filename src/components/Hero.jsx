import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="hero container animate-up">
      <div className="hero-status">
        <span className="status-dot"></span> Available for new opportunities
      </div>
      
      <h1 className="hero-title">
        ADITYA KIRAN SHUKLA
      </h1>
      
      <p className="hero-desc">
        I am a Computer Science undergraduate passionate about technology, innovation, and solving real-world problems. I focus on building practical projects that combine programming, problem-solving, and usability. I aim to grow into a developer who creates scalable and impactful systems.
      </p>
      
      <div className="hero-buttons">
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=adityashukla600700@gmail.com&tf=cm" target="_blank" rel="noreferrer" className="nav-cta" style={{ background: 'var(--text-main)' }}>
          Mail Me
        </a>
        <a href="https://drive.google.com/file/d/100jWPT_UN8v-oi9IZtfIkhHLxJ2-v6eY/view?usp=sharing" target="_blank" rel="noreferrer" className="nav-cta" style={{ background: 'transparent', color: '#fff', border: '1px solid var(--border-active)' }}>
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;

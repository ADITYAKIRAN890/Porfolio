import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaCheckCircle } from 'react-icons/fa';

const ContactPage = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="container animate-up" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="footer-content" style={{ width: '100%' }}>
        <div>
          <h2 className="footer-title">LET'S<br/>TALK.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '400px' }}>
            Ready to bring your ideas to life? Fill out the form or reach out directly via email or social media.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://github.com/ADITYAKIRAN890" target="_blank" rel="noreferrer" style={{ fontSize: '24px' }}>
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/adityaakirann/" target="_blank" rel="noreferrer" style={{ fontSize: '24px' }}>
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/aditya-kiran-shukla-288080312/" target="_blank" rel="noreferrer" style={{ fontSize: '24px' }}>
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
          <input type="text" placeholder="What's your name?" className="input-field" required />
          <input type="email" placeholder="Your email address?" className="input-field" required />
          <input type="text" placeholder="Tell me about your project..." className="input-field" required />
          <button type="submit" className="submit-btn" disabled={status !== 'idle'}>
            {status === 'idle' && 'Send Message'}
            {status === 'submitting' && 'Sending...'}
            {status === 'success' && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <FaCheckCircle /> Sent!
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;

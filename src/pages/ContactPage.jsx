import React, { useState, useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [status, setStatus] = useState('idle');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || templateId.includes('your_template_id') || publicKey.includes('your_public_key')) {
      alert('EmailJS credentials are not fully configured in .env file.');
      setStatus('idle');
      return;
    }

    // Send the main contact email
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Main email sent:', result.text);
        
        // If auto-reply template is provided, send the auto-reply
        if (autoReplyTemplateId) {
          emailjs.sendForm(serviceId, autoReplyTemplateId, form.current, publicKey)
            .then(res => console.log('Auto-reply sent:', res.text))
            .catch(err => console.error('Failed to send auto-reply:', err.text));
        }

        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 3000);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
        setStatus('idle');
      });
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

        <form ref={form} className="contact-form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
          <input type="text" name="user_name" placeholder="What's your name?" className="input-field" required />
          <input type="email" name="user_email" placeholder="Your email address?" className="input-field" required />
          <textarea name="message" placeholder="Tell me about your project..." className="input-field" style={{ minHeight: '100px', paddingTop: '15px' }} required />
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

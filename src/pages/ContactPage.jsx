import React, { useState, useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactPage = () => {
  const [status, setStatus] = useState('idle');
  const form = useRef();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    if (!executeRecaptcha) {
      alert('reCAPTCHA has not loaded yet. Please try again in a moment.');
      setStatus('idle');
      return;
    }

    try {
      // 1. Generate reCAPTCHA token
      const token = await executeRecaptcha('contact_form_submit');

      // 2. Verify token on our serverless backend
      const verifyRes = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });
      
      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        alert(verifyData.message || 'Verification failed. Please try again.');
        setStatus('idle');
        return;
      }

      // 3. Send Emails via EmailJS if human verification passed
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
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      console.log('Main email sent');
      
      // If auto-reply template is provided, send the auto-reply
      if (autoReplyTemplateId) {
        try {
          await emailjs.sendForm(serviceId, autoReplyTemplateId, form.current, publicKey);
          console.log('Auto-reply sent');
        } catch (err) {
          console.error('Failed to send auto-reply:', err.text || err);
        }
      }

      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus('idle'), 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again later.');
      setStatus('idle');
    }
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

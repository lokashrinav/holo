import React, { useState } from 'react';
import NeonButton from '../components/NeonButton';

function ContactSection() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
  };

  return (
    <section id="contact" className="contact holo-panel">
      <h2 className="neon-text">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message here..."
          required
        />
        <NeonButton type="submit">Send</NeonButton>
      </form>
    </section>
  );
}

export default ContactSection;

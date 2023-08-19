import React, { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const welcomeDivRef = useRef(null);

  const applyFloatInAnimation = (divRef) => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        divRef.current.classList.add('float-in');
      }
    });

    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  };

  useEffect(() => {
    applyFloatInAnimation(welcomeDivRef);
    
  }, []);

  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here
    console.log('Form submitted:', {
      Name,
      email,
      message,
    });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    // Set the isSubmitted state to true
    setIsSubmitted(true);
  };

  return (
    <div  className="contact"  style={{position:"relative"}}>
          
      <div id="contact"></div>
      <div ref={welcomeDivRef} className="contact-container floating-div">
        <h1>Say hi</h1>
        <h2>Get In Touch</h2>
        {isSubmitted ? (
          <div className="sent-message">
            <h4>Message Sent! Thanks for reaching out!</h4>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label className="contact-label"> Name:</label>
              <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
                className="contact-input"
              />
            </div>
            <div>
              <label className="contact-label">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="contact-input"
              />
            </div>
            <div>
              <label className="contact-label">Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="contact-textarea"
              />
            </div>
            <button type="submit" className="contact-button">
              Submit
            </button>
            
          </form>
        )}

      </div>
    </div>
  );
};

export default Contact;

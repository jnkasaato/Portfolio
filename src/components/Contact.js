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
    console.log('Form submitted:', {
      Name,
      email,
      message,
    });
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(true);
  };

  return (
    <div  className="contact" ref={welcomeDivRef} style={{position:"relative"}}>
      <div id="contact"></div>
      <h1>03.Contact</h1>
      <h2>Let's Chat</h2>
      <a href="mailto:jordanakasaato@gmail.com">Send Email</a>
    </div>
  );
};

export default Contact;

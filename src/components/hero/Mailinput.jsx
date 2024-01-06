import React, { useState } from 'react';
import { RiMailLine } from 'react-icons/ri';

const MailInput = () => {
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Check if the email is valid before proceeding
    if (validateEmail(email)) {
      // Create a mailto link with the user-entered email
      const mailtoLink = `mailto:contact@elssrcc.in?subject=Registration&body=${encodeURIComponent(`Please register ${email}`)}`;
      
      // Open the user's default email client
      window.location.href = mailtoLink;
    } else {
      alert('Invalid email format. Please enter a valid email.');
    }
  };

  const validateEmail = (email) => {
    // Simple email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="flexCenter mail">
      <RiMailLine color="orange" size={25} />
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button className="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default MailInput;

// src/Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faComputerMouse, faClipboardList } from '@fortawesome/free-solid-svg-icons'; // Replace with actual icons
import '../styles/Services.css'; // Import your CSS file for styling

const Services = () => {
  const services = [
    {
      title: 'Coconut',
      icon: faTree, // Replace with actual icon
      description: 'We provide the best coconut products.',
    },
    {
      title: 'Technology',
      icon: faComputerMouse, // Replace with actual icon
      description: 'Innovative tech solutions for your business.',
    },
    {
      title: 'Tracker',
      icon: faClipboardList, // Replace with actual icon
      description: 'Track your progress with our advanced tools.',
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <FontAwesomeIcon icon={service.icon} size="3x" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
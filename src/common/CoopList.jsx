import React, { Component } from 'react'
import '../styles/CoopList.css'; // Import your CSS file for styling

export class CoopList extends Component {
  render() {
    const logos = [
        {
          src: '/cooplist/acdi_logo.png', // Replace with actual logo URL
          alt: 'Logo 1',
          link: 'https://www.acdicoop.com/', // Replace with actual link
        },
        {
          src: '/cooplist/botolan_zambales_logo.png', // Replace with actual logo URL
          alt: 'Logo 2',
          link: 'https://tl.wikipedia.org/wiki/Botolan', // Replace with actual link
        },
        {
          src: '/cooplist/cda_logo.png', // Replace with actual logo URL
          alt: 'Logo 3',
          link: 'https://cda.gov.ph/', // Replace with actual link
        }
      ];

    return (
      <div>
         <section className="logo-list">
      <h2>Our Partners</h2>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <a href={logo.link} target="_blank" rel="noopener noreferrer" key={index} className="logo">
            <img src={logo.src} alt={logo.alt} />
          </a>
        ))}
      </div>
    </section>
        
        
      </div>
    )
  }
}

export default CoopList

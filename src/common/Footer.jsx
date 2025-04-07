import React, { Component } from 'react'
import '../styles/Footer.css'; // Import the CSS file for styling

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
                <p>Follow us on social media!</p>
            </div>
        </footer>
        
      </div>
    )
  }
}

export default Footer

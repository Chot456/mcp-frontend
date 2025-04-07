import React, { Component } from 'react'
import '../styles/Navbar.css';

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="bg-dark py-4 shadow-sm">
                    <div className="d-flex justify-content-center align-items-center gap-5">

                        {/* Left Logo */}
                        <div>
                            <img
                                src="/pca_logo.png"
                                alt="Left Logo"
                                style={{ height: "70px" }}
                            />
                        </div>

                        {/* Center Text */}
                        <div className="text-white text-center flex-grow-6 fs-4">
                            MASSIVE COCONUT PLANTING SYSTEM
                        </div>

                        {/* Right Logo */}
                        <div>
                            <img
                                src="/cda_logo.png"
                                alt="Right Logo"
                                style={{ height: "70px" }}
                            />
                        </div>

                    </div>
                </nav>

                {/* Bottom Navbar with container and left-aligned items */}
                <nav className="bg-light border-top border-bottom py-3">
        <div className="container">
          <div className="d-flex justify-content-start gap-4">
            <a href="#home" className="nav-link-custom">HOME</a>
            <a href="#profile" className="nav-link-custom">GEODIC TRACKER</a>
            <a href="#about" className="nav-link-custom">ABOUT US</a>
          </div>
        </div>
      </nav>

            </div>
        )

    }


}

export default Nav

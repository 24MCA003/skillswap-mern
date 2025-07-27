// src/components/Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-5">
            <div className="container">
                <p className="mb-1">SkillSwap © {new Date().getFullYear()}</p>
                <p className="mb-0">
                    Built with ❤️ using MERN Stack by Nikesh
                </p>
            </div>
        </footer>
    );
};

export default Footer;

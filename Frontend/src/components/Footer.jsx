import React from "react";
import "../assets/css/Home.css"

const Footer = () => {
    return (
        <footer className="text-center py-6 border-t border-gray-700">
            <p>&copy; {new Date().getFullYear()} Sujan Rai. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
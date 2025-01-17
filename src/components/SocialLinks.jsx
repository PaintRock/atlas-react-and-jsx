import React from 'react';
import linkedinImage from "../assets/linkedin.svg";
import githubImage from "../assets/github.svg";

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/PaintRock" target="_blank" rel="noopener noreferrer">
                <img src= {linkedinImage} alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/PaintRock" target="_blank" rel="noopener noreferrer">
                <img src= {githubImage} alt="GitHub" />
            </a>
        </div>
    );
};
    
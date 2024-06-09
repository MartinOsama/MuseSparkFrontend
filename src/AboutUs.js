import React from 'react';
import './aboutus.css';

const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <h1>About Us</h1>
            <p>Welcome to MuseSpark, a platform dedicated to connecting teachers and students in a collaborative educational environment. Our mission is to empower educators and learners through innovative technology and community engagement.</p>
            <h2>Our Mission</h2>
            <p>At MuseSpark, we strive to enhance the educational experience by providing tools that facilitate learning and teaching. We believe in the power of education to transform lives and aim to make quality education accessible to everyone.</p>
            <h2>Our Team</h2>
            <p>Our team consists of passionate educators, developers, and designers who are committed to creating a user-friendly and effective learning platform. We work tirelessly to improve our services and ensure that our users have the best possible experience.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions, feedback, or would like to learn more about MuseSpark, please feel free to contact us at <a href="mailto:info@musespark.com">info@musespark.com</a>.</p>
        </div>
    );
}

export default AboutUs;

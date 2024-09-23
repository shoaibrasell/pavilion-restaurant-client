import React from 'react';

const About = () => {
  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-primary mb-8 text-center">About Us</h1>
        <p className="text-gray-600 mb-10 text-center">
          Welcome to our company! We are dedicated to delivering high-quality solutions to help businesses succeed.
          Our team of experienced professionals works tirelessly to create innovative strategies tailored to your
          needs.
        </p>
        <p className="text-gray-600 text-center">
          We believe in building lasting relationships with our clients and ensuring their goals are met with 
          excellence. Thank you for trusting us on your journey.
        </p>

        <div className="mt-16 flex justify-center">
          <button className="btn btn-primary mr-14">Contact Us</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;

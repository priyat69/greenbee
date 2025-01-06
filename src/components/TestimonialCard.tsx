import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, company, image, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-primary-700">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{content}</p>
    </div>
  );
};

export default TestimonialCard;
import React, { useState } from 'react';
import { User } from 'lucide-react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    {
      title: "Priyat Tamang",
      role: "CEO and Founder",
      description: "Leading innovation and growth"
    },
    {
      title: "Avisekh Gurung",
      role: "CTO and Co-Founder", 
      description: "Leading technical strategy and innovation."
    },
    {
      title: "Nikhil Gurung",
      role: "COO",
      description: "Driving efficient solutions"
    },
    {
      title: "Prashant Chettri",
      role: "CFO",
      description: "Optimizing financial strategies"
    }    
    
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">Our Team</h2>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden relative rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 p-6">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <User size={48} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-center mb-2">{item.role}</p>
                  <p className="text-gray-700 text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      <button
  onClick={prev}
  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out transform"
>
  <span className="text-xl font-bold text-gray-600">←</span>
</button>

<button
  onClick={next}
  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out transform"
>
  <span className="text-xl font-bold text-gray-600">→</span>
</button>


        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
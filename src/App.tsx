import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestimonialCard from './components/TestimonialCard';
import { ArrowRight, Leaf, Hotel, Recycle } from 'lucide-react';
import Team from './components/Team';


function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-20 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-800 leading-tight">
                Sustainable Solutions for
                <span className="text-accent-400"> Hospitality</span>
              </h1>
              <p className="text-xl text-gray-600">
                Transforming the hospitality industry through eco-friendly practices and innovative solutions.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-accent-400 transition-transform transform hover:scale-105 flex items-center shadow-lg">
                  Learn More <ArrowRight className="ml-2" />
                </button>
                <button className="bg-gray-100 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition-transform transform hover:scale-105 flex items-center shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>
            {/* Image Content with Slogan */}
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
                alt="Sustainable Hotel"
                className="rounded-lg shadow-2xl transform transition-transform hover:scale-105 duration-500 w-full object-cover"
              />
              {/* Slogan Overlay */}
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                <div className="text-center px-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    "Empowering a Greener Future"
                  </h2>
                  <p className="text-lg md:text-xl text-white mt-2">
                    Together, let's build a sustainable tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-primary-50 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: <Leaf className="h-12 w-12 text-primary-500" />,
          title: "Eco Consultancy",
          description: "Expert guidance on implementing sustainable practices in your hospitality business."
        },
        {
          icon: <Hotel className="h-12 w-12 text-primary-500" />,
          title: "Green Certification",
          description: "Get certified for your environmental commitments and sustainable operations."
        },
        {
          icon: <Recycle className="h-12 w-12 text-primary-500" />,
          title: "Waste Management",
          description: "Innovative solutions for reducing and managing waste in hospitality settings."
        }
      ].map((service, index) => (
        <div
          key={index}
          className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
          style={{
            background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
            borderRadius: "12px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg blur-lg opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 shadow-md group-hover:scale-110 transition-transform">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-primary-700 mb-2 group-hover:text-primary-900 transition-colors relative z-10">
            {service.title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-colors relative z-10">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>






      {/* Impact Section */}
      <section id="impact" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Hotels Certified" },
              { number: "1M+", label: "Trees Planted" },
              { number: "50%", label: "Average Waste Reduction" },
              { number: "100+", label: "Countries Reached" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-accent-400 mb-2">{stat.number}</h3>
                <p className="text-primary-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">What Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Sustainability Director"
              company="Grand Hotel Group"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              content="GreenBee has transformed our approach to sustainability. Their expertise and guidance have been invaluable."
            />
            <TestimonialCard
              name="Michael Chen"
              role="CEO"
              company="EcoStay Resorts"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              content="Working with GreenBee helped us achieve our sustainability goals while reducing operational costs."
            />
            <TestimonialCard
              name="Emma Williams"
              role="Operations Manager"
              company="Sustainable Stays"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
              content="The certification process was smooth and the ongoing support has been exceptional."
            />
          </div>
        </div>
      </section>
      <Team />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-primary-800 mb-8">Get In Touch</h2>
      <form className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300"
            ></textarea>
          </div>
        </div>
        <button
          className="mt-6 bg-primary-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-accent-400 transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

// pages/Home.js
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust the path as necessary
import Slider from 'react-slick';

// Sample carousel data
const carouselItems = [
  {
    id: 1,
    image: 'my-app\src\assets\carousel\akshay_bhai_50.webp',
    title: 'Welcome to Laxmi Chit Fund',
    description: 'Discover our financial solutions and services.'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/600x400?text=Slide+2',
    title: 'Loan Services',
    description: 'Apply for personal or business loans with ease.'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/600x400?text=Slide+3',
    title: 'Investment Plans',
    description: 'Explore various investment plans tailored for you.'
  }
];

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Home = () => {
  const { isAuthenticated, userType } = useAuth();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-sky-600">Welcome to Laxmi Chit Fund Bank</h1>
      {isAuthenticated && (
        <p className="text-lg text-gray-700">Logged in as <span className="font-semibold">{userType}</span></p>
      )}
      
      <div className="my-8">
        <Slider {...carouselSettings}>
          {carouselItems.map(item => (
            <div key={item.id} className="relative">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-sky-600">About Us</h2>
        <p className="text-gray-700">
          Laxmi Chit Fund Bank is dedicated to providing comprehensive financial services to meet your needs. Our offerings include personal and business loans, investment plans, and more. We aim to be your trusted financial partner, helping you achieve your financial goals with ease and confidence.
        </p>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './MyCarousel.css';

const MyCarousel = () => {
  const testimonials = [
    {
      id: 1,
      author: 'By John Doe, Photographer',
      text: '“Thank you so much for being proactive (awesome memory, by the way). Maybe it seems like no big deal to you but this is amazing customer service and is greatly appreciated.”',
    },
    {
      id: 2,
      author: 'By GIna, Traveler',
      text: '“Mandi was great with the entire process from planning to updates during the trip. We had 11 people and everything was perfectly executed. We appreciate all of her hard work. It was truly the trip of a lifetime. Thank you!”',
    },
    {
      id: 3,
      author: 'By Bob Johnson, Traveler',
      text: '“Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance before we left on what to bring and such, that was very helpful! Thanks again."',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <p className='text-xl font-bold text-center mb-8'>{testimonials[currentTestimonial].text}</p>
        <p className="author text-center text-gray-500">- {testimonials[currentTestimonial].author}</p>
      </div>

      <div className="slider-pagination">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            className={`pagination-dot ${index === currentTestimonial ? 'active' : ''}`}
            onClick={() => goToTestimonial(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Custom Arrow Component with Font Awesome Icons
const Arrow = ({ className, style, onClick, direction }) => (
  <div 
    className={className} 
    style={{
      ...style, 
      display: 'block', 
      padding: '15px', // Adjust padding for bigger size
      borderRadius: '50%', 
      zIndex: 2, 
      position: 'absolute', 
      top: '50%', 
      [direction]: '25px', // Positioning arrows to the left and right
      transform: 'translateY(-50%)', // Center vertically
      cursor: 'pointer',
    }} 
    onClick={onClick}
  >
    <FontAwesomeIcon 
      icon={direction === 'right' ? faArrowRight : faArrowLeft} 
    />
  </div>
);

const ImageLayout = () => {
    const images = [
        'https://img.freepik.com/free-photo/portrait-nurse-putting-protective-latex-gloves_482257-94408.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', 
        'https://img.freepik.com/free-photo/portrait-young-african-american-woman-doctor-against-blue-background_93675-132921.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', 
        'https://img.freepik.com/premium-photo/portrait-young-african-female-doctor-medical-mask-blue-studio_93675-150048.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', 
        'https://img.freepik.com/premium-photo/confident-black-doctor-posing-blue-studio-background_93675-178866.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/front-view-young-doctor-medical-suit-with-red-mask-blue_140725-154098.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', 
        'https://img.freepik.com/free-photo/woman-nurse-wearing-face-mask-using-laptop-front-camera-medical-assistant-uniform-having-protection-against-coronavirus-while-holding-computer-work-healthcare_482257-36516.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
         'https://img.freepik.com/free-photo/closeup-hands-giving-thumbs-up-cheerful-african-american-doctor-medical-uniform-with-stethoscope-cropped-detail-optimsitic-medic-showing-hand-gesture-positive-attitude_482257-39711.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', 
        'https://img.freepik.com/free-photo/female-doctor-looking-phone-blue-wall_23-2148525092.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', 
        'https://img.freepik.com/free-photo/front-view-male-doctor-medical-suit-with-stethoscope-blue-background-pandemic-covid-virus-hospital-vaccine-coronavirus-drug_140725-156777.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid'
    ];

    // Slick carousel settings
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow direction="right" />, // Custom right arrow
        prevArrow: <Arrow direction="left" />,  // Custom left arrow
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    };

    return (
      <>
        <div className="flex flex-col items-center overflow-hidden w-full">
          <Slider {...carouselSettings} className="w-full">
            {images.map((img, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 h-64 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <img src={img} alt={`other doctors ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Newsletter Signup Section */}
        <div className="text-blue-900 p-6 rounded-lg mb-5 flex flex-col md:flex-row justify-between items-center mx-4 md:mx-80">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sign up for newsletter</h2>
            <p>Stay updated with our latest news and offers.</p>
          </div>
          <form className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="p-3 rounded-l-lg w-full md:w-64"
            />
            <button 
              type="submit" 
              className="bg-blue-700 text-white p-2 rounded-r-lg hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </>
    );
};

export default ImageLayout;

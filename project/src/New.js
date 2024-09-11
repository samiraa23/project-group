import React from "react";

const Slider = () => {
  const slides = [
    {
      backgroundImage: "url('img/slider2.jpg')",
      heading: "We Provide Medical Services That You Can Trust!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
      buttons: [
        { text: "Get Appointment", link: "#", className: "btn" },
        { text: "Learn More", link: "#", className: "btn primary" },
      ],
    },
    {
      backgroundImage: "url('img/slider.jpg')",
      heading: "We Provide Medical Services That You Can Trust!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
      buttons: [
        { text: "Get Appointment", link: "#", className: "btn" },
        { text: "About Us", link: "#", className: "btn primary" },
      ],
    },
    {
      backgroundImage: "url('img/slider3.jpg')",
      heading: "We Provide Medical Services That You Can Trust!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
      buttons: [
        { text: "Get Appointment", link: "#", className: "btn" },
        { text: "Contact Now", link: "#", className: "btn primary" },
      ],
    },
  ];

  return (
    <section className="slider">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            className="single-slider"
            style={{ backgroundImage: slide.backgroundImage }}
            key={index}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      {slide.heading.split(" ").map((word, idx) =>
                        word.startsWith("Medical") || word.startsWith("Trust!") ? (
                          <span key={idx}>{word} </span>
                        ) : (
                          word + " "
                        )
                      )}
                    </h1>
                    <p>{slide.description}</p>
                    <div className="button">
                      {slide.buttons.map((button, btnIndex) => (
                        <a
                          href={button.link}
                          className={button.className}
                          key={btnIndex}
                        >
                          {button.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;

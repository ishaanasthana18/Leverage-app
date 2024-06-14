import React from 'react'
import styles from "./Hero.module.css";
import Slider from 'react-slick';

const images = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
  '/images/slider5.jpg',
  '/images/slider6.jpg',
  '/images/slider7.jpg',
  '/images/slider8.jpg',
  '/images/slider9.jpg',
  '/images/slider10.jpg',
];

const Hero = () => {

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="reactSlickPrevButton"
            style={{ ...style }}
            onClick={onClick}
        >
            <img className={`${styles["arrow"]}`} src="/images/rightArrowIcon.svg" />
        </div>
    );
  }

  function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
          <div
              className="reactSlickNextButton"
              style={{ ...style }}
              onClick={onClick}
          >
              <img className={`${styles["arrowRight"]}`} src="/images/rightArrowIcon.svg" />
          </div>
      );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>FIRST IN THE FAMILY</h1>
        <p className={styles.description}>They are the global citizens of tomorrow. Start your study abroad journey today.</p>
        <div className={styles.liveOn}>
            <span>Live on</span>
            <img src="https://asset.brandfetch.io/idh5Jct7tV/idqU3ch8ih.png" alt="Disney+ Hotstar Logo"></img>
        </div>
        <div className={styles.buttons}>
            <button className={styles.btnBlue}>Get Your Shortlist for FREE</button>
            <button className={styles.btnWhite}>Talk to an Expert</button>
        </div>
        <p className={styles.footerText1}>95% of our students get an admit in less than 4 weeks</p>
        <p className={styles.footerText2}>Our students finished university to work at global offices  of:</p>
        <div className={styles.company}>
            <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg"  alt="google"></img>
            <img src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg" alt="netflix"></img>
            <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" alt="amazon"></img>
            <img src="https://www.vectorlogo.zone/logos/scala-lang/scala-lang-ar21.svg" alt="scala"></img>
            <img src="https://www.vectorlogo.zone/logos/browserstack/browserstack-ar21.svg" alt="browserstack"></img>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <Slider {...settings}>
            {images.map((src, index) => (
                <div key={index} className={styles.carouselItem}>
                  <img src={src} alt={`Slider Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
      </div>
      <button className="whatsapp"><img src="/images/whatsApp.svg" alt="WhatsApp Icon" /></button>
    </div>
  )
}

export default Hero
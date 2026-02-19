import React from "react"; // Added React import for safety
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import test1 from "../img/test1.jpg";
import test2 from "../img/test2.jpg";
import test3 from "../img/test3.jpg";
import test4 from "../img/test4.jpg";

const Card = ({ star, title, imgSrc, description, name }) => {
  return (
    <div className="testimonial-card">
      <div className="stars">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{description}</p>
      <div className="author">
        <img src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{name}</h3>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
        </div>
      </div>
      <Carousel {...carouselParams} arrows={true} showDots={true}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Micheal's Industrial Accident Recovery"
            imgSrc={test1}
            description="I lost my right arm in a industrial accident at the factory where I worked. For two years, I struggled with basic daily tasks and thought my independence was gone forever. A colleague referred me to Orthoroyal, and from the first consultation, I felt hope. The team designed a prosthetic that feels like part of me. Today, I can work, cook, and even play with my children again. Thank you Orthoroyal for giving me back my life."
            name="Micheal okafor"            
          />
        </div>
        <div>
          <Card
            title="Sarah's Diabetes Success Story"
            imgSrc={test3}
            description="As a diabetic patient, I faced the amputation of my left foot after complications. I was terrified of being confined to a wheelchair. My doctor recommended Orthoroyal, and the experience transformed my outlook. The young, brilliant prosthetist took time to understand my lifestyle and created a solution that lets me walk comfortably. I'm now back to visiting my grandchildren and managing my small shop. Orthoroyal truly cares about their patients."
            name="Grace ogunwale"            
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="David's Congenital Condition Victory"
            imgSrc={test2}
            description="I was born with a limb difference and had tried several prosthetic solutions that never felt right. At 25, I visited Orthoroyal hoping for one last attempt. Their innovative approach and modern technology gave me my first prosthetic that actually feels natural. The rehabilitation team taught me how to move with confidence, and now I've started the small business I always dreamed of. Orthoroyal didn't just give me a limb—they gave me confidence."
            name="David Adeyemi"            
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="From Adebola, Auto Accident Survivor"
            imgSrc={test4}
            description="After a motorcycle accident claimed my leg, I thought my teaching career was over. The depression was overwhelming until my sister found Orthoroyal. The compassionate team walked with me through every step—from fitting to rehabilitation. Their advanced prosthetic component allows me to stand and move around my classroom all day. I'm back doing what I love, and my students never see me as different. Orthoroyal restored my purpose."
            name="Adebola olajide"            
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",  
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};

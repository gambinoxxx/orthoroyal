import { Link } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
            title="Modern look & trending design"
            imgSrc="/testimonials/1.png"
            description="Symbiotic's team delivered a modern and trending design that exceeded our expectations. Their attention to detail and creative approach resulted in a visually stunning product."
            name="Denny Hilguston"            
          />
        </div>
        <div>
          <Card
            title="Layout and organized layers"
            imgSrc="/testimonials/2.png"
            description="The layout and organization of the layers were impeccable. It made the final product easy to manage and scale for future updates. A truly professional job."
            name="Vera Duncan"            
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Design Quality & performance"
            imgSrc="/testimonials/3.png"
            description="We were impressed by the high quality of the design and the outstanding performance. The application is fast, responsive, and looks fantastic on all devices."
            name="Naseem Khan"            
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Layout and organized layers"
            imgSrc="/testimonials/4.png"
            description="Working with Symbiotic was a great experience. The organized layers and clean code in the final delivery made our team's work much more efficient."
            name="Lina Hart"            
            
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
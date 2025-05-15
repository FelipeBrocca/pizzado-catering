import { useEffect, useState } from "react";
import axios from "axios";
import "./Testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_MENU_DATA_API_URL}/googleres`
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching menu data", error);
      }
    };
    fetchMenuData();
  }, []);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="testimonial container section">
      <h2 className="section__title">Lo que dicen los clientes</h2>
      <Swiper
        className="testimonial__container"
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={2000}
        grabCursor={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
          1300: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {testimonials?.map(
          ({ _id, image, name, message, stars, link, date }) => {
            return (
              <SwiperSlide className="testimonial__card" key={_id}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-testim"
                >
                  <div className="top-testimonial">
                    <img
                      src={
                        image?.url
                          ? image.url
                          : "https://res.cloudinary.com/dk8plhzhw/image/upload/v1747266739/user-image_ppjwho.webp"
                      }
                      alt={name}
                      className="testimonial__img"
                    />
                    <div>
                      <div className="testimonial__name">
                        <h3>{name}</h3>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 48 48"
                          className="svg-google"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                        </svg>
                      </div>

                      <p className="top-test-date">{formatDate(date)}</p>

                      <div className="testimonial__stars">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            style={{
                              color: i < stars ? "#fdc860" : "transparent",
                              stroke: "#fdc860",
                              strokeWidth: 40,
                              marginRight: 4,
                              fontSize: "14px",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="testimonial__description">{message}</p>
                </a>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
      <a
        href="https://www.google.com/maps/place/Pizzado+Catering/@-34.6499953,-60.084747,8z/data=!4m8!3m7!1s0x68418d8a59697995:0xeac610785a365bf6!8m2!3d-34.6593546!4d-58.7660258!9m1!1b1!16s%2Fg%2F11lzw_bmlt?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="link-to-google"
      >
        Ver más reseñas de{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
      </a>
    </section>
  );
};

export default Testimonials;

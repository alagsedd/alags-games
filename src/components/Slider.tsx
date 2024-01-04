import useSliders from "../services/useSlider";
import styles from "../styles/Slider.module.css";
import { Autoplay, Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderSkeleton from "../cards/SliderSkeleton";
import getCroppedImageUrl from "../services/image-url";

const Slider = () => {
  const { data, isLoading } = useSliders();

  if (isLoading) return <SliderSkeleton />;
  return (
    <>
      <div className={styles.sliderBox}>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Autoplay, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 4000,
          }}
          scrollbar={{ draggable: true }}
        >
          {data?.results.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                key={item.id}
                className={styles.image}
                src={getCroppedImageUrl(item.image_background)}
                alt="Your browser doesn't support this image"
              />{" "}
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </>
  );
};

export default Slider;

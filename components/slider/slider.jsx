import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import cls from "./slider.module.scss"
import Link from "next/link";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = ({categories}) => {
  return (   
<Swiper  className={cls.catalog}
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={8}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
      {categories.map(({ image, name, link }) => {
          return (
            <Link href={link}>
              <div>
                <div className={cls.up}>
                  <Image
                    src={image}
                    alt={`${name} category`}
                    width={150}
                    height={150}
                  />
                </div>
                <div className={cls.down}>
                  <p>{name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </SwiperSlide>
    </Swiper>
    
    
  );
};

export default Slider;

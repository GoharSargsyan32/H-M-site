import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper';
import cls from "./slider.module.scss"
import Link from "next/link";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import sortInSubArr from "@/utils/sortInSubArr";


const Slider = ({categories}) => {
    return (
        <div className={cls.body}>
            <div className={cls.pervButton}>Perv</div>
            <div className={cls.nextButton}>Next</div>
            <Swiper className={cls.catalog}
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: `.${cls.pervButton}`,
                        nextEl: `.${cls.nextButton}`
                    }}
                    pagination={{clickable: true}}
            >
                {
                    sortInSubArr(categories, 8).map(item => {
                        return (
                            <SwiperSlide className={cls.swiperSlide}>
                                <div className={cls.slideBody}>
                                    {
                                        item.map(({image,name,link}) => {
                                            return (
                                                <Link href={link} className={cls.item}>
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
                                            )
                                        })
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
    ;

    export default Slider;

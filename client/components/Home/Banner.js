import styles from "../../styles/Home/Banner.module.scss";
import images from "../../assets/img";
import SwiperBlackButtons from "../common/SwiperBlackButtons";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

export default function Banner() {
    const swiperRef = useRef(null);
    const [beginSlide, setBeginSlide] = useState(true);
    const [endSlide, setEndSlide] = useState(false);

    const handleActiveSlide = (item) => {
        setBeginSlide(item.isBeginning);
        setEndSlide(item.isEnd);
    };

    return (
        <div className={styles.wrapper}>
            <Swiper 
                modules={[Navigation, Pagination,Autoplay]} 
                ref={swiperRef} slidesPerView={1} 
                navigation={{ prevEl: ".cus_prev", nextEl: ".cus_next" }} 
                pagination={{ clickable: true }} 
                autoplay={{ delay:3000 }}
                allowTouchMove={false} 
                loop 
                onSwiper={handleActiveSlide} 
                onSlideChange={handleActiveSlide} 
                className={styles.swiper_wrapper}
            >
                {Array(10)
                    .fill()
                    .map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Image src={images.banner} alt="banner" className={styles.image} />
                            </SwiperSlide>
                        );
                    })}
                <div className={styles.btn_wrapper}>
                    <SwiperBlackButtons swiperRef={swiperRef} />
                </div>
            </Swiper>
            <div className={styles.sub_banner}>
                <div className={styles.sub_banner_item}>
                    <Link href="#">
                        <Image src={images.sub_banner} alt="banner" className={styles.img} />
                    </Link>
                </div>
                <div className={styles.sub_banner_item}>
                    <Link href="#">
                        <Image src={images.sub_banner} alt="banner" className={styles.img} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

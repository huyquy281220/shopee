import styles from "../../styles/Home/Banner.module.scss";
import images from "../../assets/img";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }} loop className={styles.swiper_wrapper}>
                {Array(10)
                    .fill()
                    .map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Image src={images.banner} alt="banner" className={styles.image} />
                            </SwiperSlide>
                        );
                    })}
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

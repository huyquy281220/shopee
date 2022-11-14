import styles from "../../styles/Home/TopSearch.module.scss";
import images from "../../assets/img";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function TopSearch() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top_search}>
                <div className={styles.header}>
                    <div className={styles.title}>Tìm kiếm hàng đầu</div>
                    <Link href="#" legacyBehavior>
                        <a className={styles.show_all}>
                            <span>Xem tất cả</span>
                            <FontAwesomeIcon icon={faAngleRight} className={styles.show_all_icon} />
                        </a>
                    </Link>
                </div>
                <div className={styles.content}>
                    <Swiper modules={[Navigation]} navigation slidesPerView={6} slidesPerGroup={6} allowTouchMove={false} className={styles.swiper_wrapper}>
                        {Array(12)
                            .fill()
                            .map((item, index) => {
                                return (
                                    <SwiperSlide className={styles.swiper_slide} key={index}>
                                        <div className={styles.badge}>
                                            <Image src={images.top_search_icon} alt="icon" className={styles.badge_icon} />
                                        </div>
                                        <Link href="#">
                                            <div className={styles.img_wrapper}>
                                                <Image src={images.top_search} alt="img" className={styles.image} />
                                                <div className={styles.label}>Bán 49k+ / tháng</div>
                                            </div>
                                            <p className={styles.name}>Áo Hoodie Nỉ Nam</p>
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

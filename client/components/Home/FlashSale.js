import styles from "../../styles/Home/FlashSale.module.scss";
import images from "../../assets/img";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function FlashSale() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flash_sale}>
                <div className={styles.title}>
                    <Image src={images.flash_sale} alt="flash-sale" className={styles.image} />
                    <Link href="#" legacyBehavior>
                        <a className={styles.show_all}>
                            <span>Xem tất cả</span>
                            <FontAwesomeIcon icon={faAngleRight} className={styles.show_all_icon} />
                        </a>
                    </Link>
                </div>
                <div className={styles.content}>
                    <Swiper modules={[Navigation]} slidesPerView={6} slidesPerGroup={6} allowTouchMove={false} navigation className={styles.swiper_wrapper}>
                        {Array(6)
                            .fill()
                            .map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link href="#" className={styles.swiper_slide}>
                                            <div className={styles.badge}>
                                                <span className={styles.percent}>61%</span>
                                                <span className={styles.text}>giảm</span>
                                            </div>
                                            <Image src={images.product} alt="product" className={styles.image} />
                                            <div className={styles.price}>67.000 VNĐ</div>
                                            <div className={styles.progress_bar}>
                                                <div className={styles.filler}>
                                                    <span className={styles.text}>Đã bán 20</span>
                                                </div>
                                            </div>
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

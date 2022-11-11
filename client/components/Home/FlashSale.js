import styles from "../../styles/Home/FlashSale.module.scss";
import images from "../../assets/img";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
                        {Array(12)
                            .fill()
                            .map(() => {
                                return (
                                    <SwiperSlide className={styles.swiper_slide}>
                                        <Image src={images.product} alt="product" className={styles.image} />
                                        <div className={styles.description}>Tee basic ss1 CREWZ áo thun tay lỡ unisex Local Brand - AO_THUN_DVR (V427)</div>
                                        <div className={styles.slide_bottom}>
                                            <div className={styles.price}>67.000 VNĐ</div>
                                            <div className={styles.sold}>Đã bán 1k</div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

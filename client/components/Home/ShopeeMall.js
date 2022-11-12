import styles from "../../styles/Home/ShopeeMall.module.scss";
import images from "../../assets/img";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function ShopeeMall() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.simple_banner}>
                <Image src={images.simple_banner[1]} alt="banner" />
            </div>
            <div className={styles.mall}>
                <div className={styles.header}>
                    <div className={styles.header_left}>
                        <Link href="#" legacyBehavior>
                            <a className={styles.title}>Shopee mall</a>
                        </Link>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <Image src={images.mall_icons[0]} alt="mall-icon" className={styles.icon} />
                                <span>7 Ngày Miễn Phí Trả Hàng</span>
                            </div>
                            <div className={styles.item}>
                                <Image src={images.mall_icons[1]} alt="mall-icon" className={styles.icon} />
                                <span>Hàng Chính Hãng 100%</span>
                            </div>
                            <div className={styles.item}>
                                <Image src={images.mall_icons[2]} alt="mall-icon" className={styles.icon} />
                                <span>Miễn Phí Vận Chuyển</span>
                            </div>
                        </div>
                    </div>
                    <Link href="#" legacyBehavior>
                        <a className={styles.show_all}>
                            <span>Xem tất cả</span>
                            <FontAwesomeIcon icon={faAngleRight} className={styles.show_all_icon} />
                        </a>
                    </Link>
                </div>
                <div className={styles.content}>
                    <div className={styles.content_left}></div>
                    <div className={styles.content_right}></div>
                </div>
            </div>
        </div>
    );
}

import styles from "../../styles/Home/ShopeeMall.module.scss";
import images from "../../assets/img";
import SwiperBlackButtons from "../common/SwiperBlackButtons";
import SwiperWhiteButtons from "../common/SwiperWhiteButtons";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function ShopeeMall() {
    const bannerSwiperRef = useRef(null);
    const itemSwiperRef = useRef(null);

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
                    <div className={styles.content_left}>
                        <Swiper modules={[Navigation, Pagination, Autoplay]} ref={bannerSwiperRef} navigation={{ prevEl: ".cus_prev", nextEl: ".cus_next" }} slidesPerView={1} autoplay={{ delay: 5000 }} loop pagination={{ clickable: true }} className={styles.swiper_wrapper}>
                            {images.mall_banners.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link href="#">
                                            <Image src={item} alt="mall-banner" className={styles.image} />
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                            <div className={styles.btn_left_wrapper}>
                                <SwiperBlackButtons swiperRef={bannerSwiperRef} />
                            </div>
                        </Swiper>
                    </div>
                    <div className={styles.content_right}>
                        <Swiper modules={[Navigation]} ref={itemSwiperRef} navigation={{ prevEl: ".cus_prev", nextEl: ".cus_next" }} slidesPerView={4} slidesPerGroup={4} spaceBetween={20} allowTouchMove={false} className={styles.swiper_wrapper}>
                            <SwiperSlide className={styles.swiper_item}>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiper_item}>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiper_item}>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiper_item}>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiper_item}>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiper_item}>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                                <Link href="#">
                                    <Image src={images.mall_img} alt="img" />
                                    <div className={styles.desc}>Giảm đến 50%</div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.btn_right_wrapper}>
                            <SwiperWhiteButtons swiperRef={itemSwiperRef} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

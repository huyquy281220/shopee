import styles from "../../styles/Header/Navbar.module.scss";
import images from "../../assets/img";
import NotifyPopover from "./Popover/Notify";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [style, setStyle] = useState({ display: "none" });

    const handleShowPopover = () =>{
        setStyle({display: "block"});
    }

    const handleHidePopover = () =>{
        setStyle({display: "none"});
    }

    return (
        <nav className={styles.wrapper}>
            <div className={styles.navbar_left}>
                <a href="https://banhang.shopee.vn/account/signin?next=%2F" target="_blank" className={styles.navbar_left_item}>
                    Kênh người bán
                </a>
                <a href="/" className={styles.navbar_left_item}>
                    Trờ thành người bán Shopee
                </a>
                <div className={styles.download_drawer}>
                    <a href="https://shopee.vn/web" target="_blank" className={styles.navbar_left_item}>
                        Tải ứng dụng
                    </a>
                    <div className={styles.download_drawer_content}>
                        <Image src={images.qr} alt="qr-code" className={styles.qr_code} />
                        <div className={styles.download_apps}>
                            <Image src={images.app_store} alt="app-store" className={styles.download_apps_item} />
                            <Image src={images.gg_play} alt="google-play" className={styles.download_apps_item} />
                            <Image src={images.gallery} alt="gallery" className={styles.download_apps_item} />
                        </div>
                    </div>
                </div>
                <div className={styles.navbar_left_item}>
                    <span>Kết nối</span>
                    <>
                        <a href="https://www.facebook.com/ShopeeVN" target="_blank" className={styles.social_icon}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/Shopee_VN/" target="_blank" className={styles.social_icon}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </>
                </div>
            </div>
            <div className={styles.navbar_right}>
                <div className={styles.navbar_right_notify} onMouseEnter={handleShowPopover} onMouseLeave={handleHidePopover} >
                    <a href="" className={`${styles.navbar_right_item} ${styles.notify_hover}`}>
                        <FontAwesomeIcon icon={faBell} className={styles.navbar_right_icon} />
                        Thông báo
                    </a>
                    <NotifyPopover notifyStyle={style} />
                </div>
                <a href="" className={styles.navbar_right_item}>
                    <FontAwesomeIcon icon={faQuestionCircle} className={styles.navbar_right_icon} />
                    Hỗ trợ
                </a>
                <div className={`${styles.navbar_right_item} ${styles.lang_hover}`}>
                    <FontAwesomeIcon icon={faGlobe} className={styles.navbar_right_icon} />
                    Tiếng Việt
                    <FontAwesomeIcon icon={faChevronDown} className={styles.navbar_right_icon} />
                    <div className={styles.navbar_right_hover}>
                        <a href="" className={styles.navbar_right_lang}>
                            Tiếng Việt
                        </a>
                        <a href="" className={styles.navbar_right_lang}>
                            English
                        </a>
                    </div>
                </div>
                <Link href="/" legacyBehavior>
                    <a className={styles.navbar_right_item}>Đăng ký</a>
                </Link>
                <Link href="/" legacyBehavior>
                    <a className={styles.navbar_right_item}>Đăng nhập</a>
                </Link>
            </div>
        </nav>
    );
}

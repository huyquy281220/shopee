import styles from "../../styles/Home/ShopeeMall.module.scss";
import images from "../../assets/img";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ShopeeMall() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.simple_banner}>
                <Image src={images.simple_banner[1]} alt="banner" />
            </div>
            <div className={styles.mall}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div>
                            <Link href="#" legacyBehavior>
                                <a className={styles.title}>Shopee mall</a>
                            </Link>
                            <div>
                                
                            </div>
                        </div>
                        <Link href="#" legacyBehavior>
                            <a className={styles.show_all}>
                                <span>Xem tất cả</span>
                                <FontAwesomeIcon icon={faAngleRight} className={styles.show_all_icon} />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.content}></div>
                </div>
            </div>
        </div>
    );
}

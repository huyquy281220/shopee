import styles from "../../styles/Header/Search.module.scss";
import Images from "../../assets/img";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <Image src={Images.logo} alt="logo" />
            </Link>

            <div className={styles.search_section}>
                <div className={styles.search_input}>
                    <form action="" method="POST">
                        <input type="text" maxLength="128" placeholder="Đăng ký và nhận voucher bạn mới đến 70k!" />
                        <button type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
                <div className={styles.search_nav}>
                    <Link href="/" legacyBehavior>
                        <a className={styles.search_nav_item}>Áo khoác</a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a className={styles.search_nav_item}>Áo khoác</a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a className={styles.search_nav_item}>Áo khoác</a>
                    </Link>
                </div>
            </div>
            <div className={styles.search_cart}>
                <Link href="/" legacyBehavior>
                    <a className={styles.search_cart_item}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                </Link>
            </div>
        </div>
    );
}

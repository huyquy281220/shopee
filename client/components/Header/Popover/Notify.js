import styles from "../../../styles/Header/Popover/Notify.module.scss";
import images from "../../../assets/img";

import Image from "next/image";
import Link from "next/link";

export default function NotifyPopover({ data }) {
    return (
        <div className={`${styles.wrapper}`}>
            {data === true ? (
                <div className={styles.customer}>Không có thông báo</div>
            ) : (
                <>
                    <div className={styles.customer}>
                        <Image src={images.notify} alt="notify" className={styles.image} />
                        <p>Đăng nhập để xem Thông báo</p>
                    </div>
                    <div className={styles.user}>
                        <Link href="/auth/register">Đăng ký</Link>
                        <Link href="/auth/login">Đăng nhập</Link>
                    </div>
                </>
            )}
        </div>
    );
}

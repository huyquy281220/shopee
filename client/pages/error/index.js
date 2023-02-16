import styles from "./404.module.scss";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h1>Không tìm thấy sản phẩm</h1>
            <Link href="/" className={styles.back_to_home}>Về trang chủ</Link>
        </div>
    );
}

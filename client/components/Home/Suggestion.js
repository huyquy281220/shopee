import styles from "../../styles/Home/Suggestion.module.scss";
import images from "../../assets/img";

import Link from "next/link";
import Image from "next/image";

export default function Suggestion() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.suggestion}>
                <div className={styles.header}>
                    <div className={styles.title}>Gợi ý hôm nay</div>
                </div>
            </div>
            <div className={styles.content}>
                {Array(18)
                    .fill()
                    .map((item,index) => {
                        return (
                            <Link href="#" key={index}>
                                <div className={styles.item}>
                                    <div className={styles.item_header}>
                                        <Image src={images.top_search_img} alt="img" className={styles.image} />
                                    </div>
                                    <div className={styles.desc}>Áo thun tay lỡ form thụng 1M kiểu dáng unisex nam nữ mặc được màu đen cá tính Xưởng Sỉ Nguyễn Hoa</div>
                                    <div className={styles.sale}></div>
                                    <div className={styles.item_footer}>
                                        <div className={styles.price}>119.000 VNĐ</div>
                                        <div className={styles.sold}>Đã bán 1,6k</div>
                                    </div>
                                    <div className={styles.item_hover}>Tìm sản phẩm tương ứng</div>
                                </div>
                            </Link>
                        );
                    })}
                    <Link href="#" legacyBehavior>
                        <a className={styles.show_more}>Xem thêm</a>
                    </Link>
            </div>
        </div>
    );
}

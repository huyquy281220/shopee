import styles from "../../styles/Home/Suggestion.module.scss";
import images from "../../assets/img";
import { NumberWithCommas as fPrice } from "../../utils/formatPrice";

import Link from "next/link";
import Image from "next/image";

export default function Suggestion({ data }) {
    const products = data || Array(12).fill();

    return (
        <div className={styles.wrapper}>
            <div className={styles.suggestion}>
                <div className={styles.header}>
                    <div className={styles.title}>Gợi ý hôm nay</div>
                </div>
            </div>
            <div className={styles.content}>
                {products?.length > 0 &&
                    products.map((item, index) => {
                        return (
                            <Link href="#" key={index}>
                                <div className={styles.item}>
                                    <div className={styles.item_header}>
                                        <Image src={images.top_search_img} alt="img" className={styles.image} />
                                    </div>
                                    <div className={styles.desc}>{item?.description}</div>
                                    <div className={styles.sale}></div>
                                    <div className={styles.item_footer}>
                                        <div className={styles.price}>{fPrice(item?.price || 100000)} VNĐ</div>
                                        <div className={styles.sold}>Đã bán 1,6k</div>
                                    </div>
                                    <div className={styles.item_hover}>Tìm sản phẩm tương ứng</div>
                                </div>
                            </Link>
                        );
                    })}
                <Link href="/suggestion" legacyBehavior>
                    <a className={styles.show_more}>Xem thêm</a>
                </Link>
            </div>
        </div>
    );
}

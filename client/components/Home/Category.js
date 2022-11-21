import styles from "../../styles/Home/Category.module.scss";
import images from "../../assets/img";

import Image from "next/image";
import Link from "next/link";

export default function Category() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.simple_banner}>
                <Image src={images.simple_banner[0]} alt="banner" />
            </div>
            <div className={styles.category}>
                <div className={styles.title}>
                    <div>Danh mục</div>
                </div>
                <div className={styles.content}>
                    {Array(20)
                        .fill()
                        .map((item, index) => {
                            return (
                                <Link href="#" key={index}>
                                    <div className={styles.item}>
                                        <Image src={images.category} alt="category" className={styles.image} />
                                        <div className={styles.name}>Máy ảnh & máy quay phim</div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

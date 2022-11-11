import styles from "../../styles/Home/Category.module.scss";
import images from "../../assets/img";

import Image from "next/image";

export default function Category() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.simple_banner}>
                <Image src={images.simple_banner} alt="banner" />
            </div>
            <div className={styles.category}>
                <div className={styles.title}>
                    <div>Danh mục</div>
                </div>
                <div className={styles.content}>
                    {Array(20)
                        .fill()
                        .map((item,index) => {
                            return (
                                <div className={styles.item} key={index} >
                                    <Image src={images.category} alt="category" className={styles.image} />
                                    <div className={styles.name}>Máy ảnh & máy quay phim</div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
import styles from "../../styles/Home/SubCategory.module.scss";
import images from "../../assets/img";

import Link from "next/link";
import Image from "next/image";

export default function Category() {
    const categoryImgs = images.sub_categories;

    return (
        <div className={styles.wrapper}>
            {categoryImgs.map((item, index) => {
                return (
                    <Link href="#" key={index} legacyBehavior>
                        <a className={styles.item}>
                            <Image src={item.img} alt={item.title} className={styles.image} />
                            <div className={styles.title}>{item.title}</div>
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}

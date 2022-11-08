import styles from "../../../styles/Header/Popover/Cart.module.scss";
import images from "../../../assets/img";

import Image from "next/image";

export default function CartPopover(style) {
    console.log(style);
    return (
        <div className={styles.wrapper} style={style.style}>
            <Image src={images.cart} alt="cart" className={styles.image} />
            <p>Chưa Có Sản Phẩm</p>
        </div>
    )
}
import styles from "../../../styles/Header/Popover/Cart.module.scss";
import images from "../../../assets/img";
import { NumberWithCommas as fPrice } from "../../../utils/formatPrice";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function CartPopover({ data }) {
    const { data: session, status } = useSession();
    return (
        <>
            {session?.user && data?.length > 0 ? (
                <div className={styles.container}>
                    <p className={styles.title}>Sản phẩm đã thêm</p>
                    {data?.slice(0, 5).map((item, index) => {
                        return (
                            <Link href={`/product/${item._id}`} key={index} className={styles.item}>
                                <Image src={item.thumbnail} alt={item.name} width={42} height={42} />
                                <div className={styles.item_desc}>
                                    <p className={styles.desc}>{item.description}</p>
                                    <p className={styles.price}>đ{fPrice(item.price)}</p>
                                </div>
                            </Link>
                        );
                    })}
                    <div className={styles.bottom}>
                        <p>{data?.length} Thêm Hàng Vào Giỏ</p>
                        <Link href="/cart">Xem Giỏ Hàng</Link>
                    </div>
                </div>
            ) : (
                <div className={styles.wrapper}>
                    <>
                        <Image src={images.cart} alt="cart" className={styles.image} />
                        <p>Chưa Có Sản Phẩm</p>
                    </>
                </div>
            )}
        </>
    );
}

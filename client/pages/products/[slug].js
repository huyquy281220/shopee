import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "./ProductDetail.module.scss";
import images from "../../assets/img";
import Breadcrumbs from "../../components/common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function ProductDetail() {
    const { asPath } = useRouter();

    const listPath = asPath.split("/");
    listPath.splice(0, 1, "Shopee");

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs listBreadcrumbs={listPath} />
            <div className={styles.content}>
                <div className={styles.content_left}>
                    <Image src={images.category} width={450} height={450} />
                    <div className={styles.list_img}>
                        <Image src={images.banner} width={82} height={82} />
                        <Image src={images.banner} width={82} height={82} />
                        <Image src={images.banner} width={82} height={82} />
                        <Image src={images.banner} width={82} height={82} />
                        <Image src={images.banner} width={82} height={82} />
                    </div>
                    <div className={styles.content_left_bottom}>
                        <div className={styles.social_share}>
                            <p className={styles.text}>Chia sẻ:</p>
                            <Link href="#" className={styles.share_icon}>
                                <Image src={images.fb_mess} width={25} height={25} />
                            </Link>
                            <Link href="#" className={styles.share_icon}>
                                <Image src={images.fb_mess} width={25} height={25} />
                            </Link>
                            <Link href="#" className={styles.share_icon}>
                                <Image src={images.fb_mess} width={25} height={25} />
                            </Link>
                            <Link href="#" className={styles.share_icon}>
                                <Image src={images.fb_mess} width={25} height={25} />
                            </Link>
                        </div>
                        <div className={styles.liked}>
                            <FontAwesomeIcon icon={faHeart} style={{ fontSize: "25px", color: "#ee4d2d" }} />
                            <p className={styles.text}>
                                Đã thích <span>(11,2k)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.content_right}>
                    <div className={styles.name}>[ Loại Tốt ] Bộ Sạc 12w chuẩn USB - Bảo hành 12 tháng dành cho máy tính bảng</div>
                    <div className={styles.price_wrapper}>
                        <p>₫29.000</p>
                        <p>₫29.000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

import styles from "./ProductDetail.module.scss";
import images from "../../assets/img";
import Breadcrumbs from "../../components/common/Breadcrumb";
import Loading from "../../components/common/Loading";
import { NumberWithCommas as fPrice } from "../../utils/formatPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHeart, faCartPlus, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../../hooks/useFetch";
import { addToCart } from "../../redux/slices/cart";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function ProductDetail() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const { asPath, query, push } = useRouter();
    const { data: session, status } = useSession();

    const listPath = asPath.split("/");
    const productId = listPath[listPath.length - 1].split("?")[0];
    listPath.splice(0, 1, "Shopee");
    listPath.splice(-1, 1, query.name);

    const { data, error, isLoading } = useFetch(`/product/${productId}`);

    if (isLoading) return <Loading />;
    if (!data) return <div style={{ textAlign: "center" }}>No product data</div>;

    const productInfo = data?.data;

    const handleAddToCart = () => {
        dispatch(addToCart({ item: productInfo, selected: inputRef.current.value }));
    };

    const handleMinus = () => {
        if (inputRef.current.value > 1) {
            inputRef.current.value--;
        } else {
            inputRef.current.value = 1;
        }
    };
    const handlePlus = () => {
        inputRef.current.value++;
    };

    const handleValueChange = () => {
        if (+inputRef.current.value < 1 || inputRef.current.value === "") {
            inputRef.current.value = 1;
        } else if (inputRef.current.value > 99) {
            inputRef.current.value = 99;
        }
    };
    const handleBuy = () => {
        dispatch(addToCart({ item: productInfo, selected: inputRef.current.value }));
        push("/cart");
    };

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>{productInfo?.name}</title>
            </Head>
            <Breadcrumbs listBreadcrumbs={listPath} />
            <div className={styles.content}>
                <div className={styles.content_left}>
                    <Image src={productInfo?.thumbnail} width={450} height={450} alt="img" />
                    <div className={styles.list_img}>
                        {productInfo?.images.length > 0 &&
                            productInfo.images.map((item, index) => {
                                return <Image src={item} width={82} height={82} alt="desc-img" key={index} />;
                            })}
                    </div>
                    <div className={styles.content_left_bottom}>
                        <div className={styles.social_share}>
                            <p className={styles.text}>Chia sẻ:</p>
                            <Link href="#" className={styles.share_icon}>
                                <Image src={images.fb_mess} width={25} height={25} alt="social-icon" />
                            </Link>
                            <Link href="#" className={styles.share_icon}>
                                <Image src={images.fb_mess} width={25} height={25} alt="social-icon" />
                            </Link>
                            <Link href="#" className={styles.share_icon}>
                                <Image src={images.fb_mess} width={25} height={25} alt="social-icon" />
                            </Link>
                            <Link href="#" className={styles.share_icon}>
                                <Image src={images.fb_mess} width={25} height={25} alt="social-icon" />
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
                    <div className={styles.name}>{productInfo?.description}</div>
                    <div className={styles.price_wrapper}>
                        <del>₫58.000</del>
                        <p>₫{fPrice(productInfo?.price || 100000)}</p>
                        <div className={styles.sale}>50% giảm</div>
                    </div>
                    <div className={styles.variation}>
                        <div className={styles.transport}>
                            <div className={styles.w_25}>Vận chuyển</div>
                            <div className={styles.transport_right}>
                                {/* <Image /> */}
                                <div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <Image src={images.transport_icon} width={25} height={15} alt="transport-icon" style={{ marginRight: "5px" }} />
                                        <span>Miễn phí vận chuyển</span>
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <FontAwesomeIcon icon={faTruck} style={{ marginRight: "5px" }} width={25} />
                                        <span style={{ color: "#636363" }}>Vận chuyển tới</span>
                                        <span style={{ marginLeft: "20px" }}>Phường Đại Mỗ, Quận Nam Từ Liêm</span>
                                    </div>
                                    <div style={{ paddingLeft: "30px" }}>
                                        <span style={{ color: "#636363" }}>Phí vận chuyển</span>
                                        <span style={{ marginLeft: "20px" }}>₫0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {productInfo?.variation.color.length > 0 && (
                            <div className={styles.color}>
                                <div className={styles.w_25}>Màu sắc</div>
                                <div className={styles.color_right}>
                                    {productInfo?.variation.color.map((item, index) => {
                                        return <button key={index}>{item}</button>;
                                    })}
                                </div>
                            </div>
                        )}
                        {productInfo?.variation.size.length > 0 && (
                            <div className={styles.size}>
                                <div className={styles.w_25}>Kích cỡ</div>
                                <div className={styles.size_right}>
                                    {productInfo?.variation.size.map((item, index) => {
                                        return <button key={index}>{item}</button>;
                                    })}
                                </div>
                            </div>
                        )}
                        <div className={styles.quantity}>
                            <div className={styles.w_25}>Số lượng</div>
                            <div className={styles.quantity_right}>
                                <button onClick={handleMinus}>-</button>
                                <input type="text" ref={inputRef} defaultValue={productInfo?.selected} onChange={handleValueChange} />
                                <button onClick={handlePlus}>+</button>
                                <span className={styles.value}>{productInfo?.quantity} sản phẩm có sẵn</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.add_to_cart} onClick={handleAddToCart}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            <span>Thêm vào giỏ hàng</span>
                        </button>
                        <button className={styles.buy_now} onClick={handleBuy}>
                            Mua Ngay
                        </button>
                    </div>
                    <hr />
                    <div className={styles.warrant}>
                        <FontAwesomeIcon icon={faShieldHalved} style={{ fontSize: "20px" }} />
                        <span style={{ margin: "0 25px 0 8px" }}>Shopee đảm bảo</span>
                        <span style={{ color: "rgba(0,0,0,.54)" }}>3 Ngày Trả Hàng / Hoàn Tiền</span>
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

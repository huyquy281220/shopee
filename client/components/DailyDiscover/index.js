import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./DailyDiscover.module.scss";
import images from "../../assets/img";
import { NumberWithCommas as fPrice } from "../../utils/formatPrice";

const fetcher = async (url) => {
    try {
        const productData = await axios.get(url);
        return productData;
    } catch (error) {
        console.log(error);
    }
};

export default function DiscoverPage(props) {
    const apiUrl = process.env.NEXT_PUBLIC_API;

    const [pageIndex, setPageIndex] = useState(1);
    const { data, error, isLoading } = useSWR(`${apiUrl}/product/products?page=${pageIndex}`, fetcher);
    const router = useRouter();
    useEffect(() => {
        router.replace(
            {
                query: {
                    page: pageIndex,
                },
            },
            undefined,
            { shallow: true }
        );
    }, [pageIndex]);

    if (isLoading) return <div style={{ textAlign: "center", color: "#ee4d2d" }}>Loading....</div>;
    if (!data) return <div style={{ textAlign: "center" }}>No product data</div>;

    const listProduct = data.data.products;
    const totalPage = data.data.totalPage;
    const listPage = [];

    for (let i = 1; i <= totalPage; i++) {
        listPage.push(i);
    }

    const handleChangePage = (e) => {
        const index = Number(e.target.innerText);
        setPageIndex(index);
    };

    const handleBack = () => {
        if (pageIndex > 1) {
            setPageIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (pageIndex < totalPage) {
            setPageIndex((prev) => prev + 1);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.btn_wrapper}>
                    <button className={styles.btn}>Tất cả</button>
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.content}>
                    {listProduct.length > 0 &&
                        listProduct.map((item, index) => {
                            return (
                                <Link
                                    href={{
                                        pathname: "/some-page",
                                        query: item._id,
                                    }}
                                    key={index}
                                >
                                    <div className={styles.item}>
                                        {item.isFavorite && (
                                            <div className={styles.item_favourite}>
                                                <span>Yêu thích</span>
                                            </div>
                                        )}
                                        <div className={styles.badge}>
                                            <span className={styles.percent}>61%</span>
                                            <span className={styles.text}>giảm</span>
                                        </div>
                                        <div className={styles.item_header}>
                                            <Image src={item.thumbnail} alt="img" width={190} height={190} className={styles.image} />
                                        </div>
                                        <div className={styles.desc}>{item.description}</div>
                                        <div className={styles.sale}></div>
                                        <div className={styles.item_footer}>
                                            <div className={styles.price}>{fPrice(item.price || 100000)} VNĐ</div>
                                            <div className={styles.sold}>Đã bán 1,6k</div>
                                        </div>
                                        <div className={styles.item_hover}>Tìm sản phẩm tương ứng</div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
                <div className={styles.pagination}>
                    <button className={styles.btn_back} onClick={handleBack}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    {listPage.length > 0 &&
                        listPage.map((item, index) => {
                            return (
                                <button key={index} className={styles.pagination_item} onClick={handleChangePage}>
                                    {item}
                                </button>
                            );
                        })}
                    <button className={styles.btn_next} onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

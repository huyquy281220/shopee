import styles from "../../styles/Header/Search.module.scss";
import Images from "../../assets/img";
import CartPopover from "./Popover/Cart";
import { cartSelector } from "../../redux/slices/cart";
import { syncCart, clearCart } from "../../redux/slices/cart";
import { useDebounce } from "../../hooks/useDebounce";

import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [listSearch, setListSearch] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    const cartData = useSelector(cartSelector);

    const cart = cartData.cart;

    useEffect(() => {
        dispatch(
            syncCart({
                email: session?.user.email,
                cart: cart,
            })
        );
        // dispatch(clearCart());
    }, [cart?.length]);

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/search?keyword=${searchValue}`);
                setListSearch(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [debounced]);

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <Image src={Images.logo} alt="logo" priority />
            </Link>

            <div className={styles.search_section}>
                <div className={styles.search_input}>
                    <form action="" method="POST">
                        <input type="text" maxLength="128" value={searchValue} placeholder="Đăng ký và nhận voucher bạn mới đến 70k!" onChange={(e) => handleSearch(e)} onFocus={handleFocus} />
                        <button type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
                <div className={styles.search_dropdown}>
                    {listSearch?.length > 0 && isFocused
                        ? listSearch.map((item, index) => {
                              return (
                                  <div key={index} className={styles.search_dropdown_item}>
                                      <Link href={{ pathname: `/products/${item._id}`, query: { name: item.name } }}>{item.name}</Link>
                                  </div>
                              );
                          })
                        : null}
                </div>
                <div className={styles.search_nav}>
                    <Link href="/" legacyBehavior>
                        <a className={styles.search_nav_item}>Áo khoác</a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a className={styles.search_nav_item}>Dép</a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a className={styles.search_nav_item}>Túi xách nữ</a>
                    </Link>
                </div>
            </div>
            <div className={styles.search_cart}>
                <Link href="/cart" legacyBehavior>
                    <a className={styles.search_cart_item}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        {session?.user && cart?.length > 0 ? <span className={styles.badge}>{cart?.length}</span> : <></>}
                    </a>
                </Link>
                <div className={styles.cart_popup}>
                    <CartPopover data={cart} />
                </div>
            </div>
        </div>
    );
}

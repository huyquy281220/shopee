import styles from "./Cart.module.scss";
import images from "../../assets/img";
import { NumberWithCommas as fPrice } from "../../utils/formatPrice";
import { totalMoney } from "../../utils/totalMoney";
import { cartSelector, incrementItem, decrementItem, changeQuantityItem, removeItem } from "../../redux/slices/cart";

import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Cart() {
    const dispatch = useDispatch();
    const checkBoxRef = useRef([]);
    const valueRef = useRef([]);
    const checkAllRef = useRef(null);
    const [itemSelected, setItemSelected] = useState([]);
    const cartData = useSelector(cartSelector);
    const cart = cartData.cart;

    const handleCheck = () => {
        let listItemChecked = [];
        checkBoxRef.current.map((item, index) => {
            if (item.checked === true) {
                listItemChecked.push(cart[index]);
            }
        });
        if (listItemChecked.length === checkBoxRef.current.length) {
            checkAllRef.current.checked = true;
        } else {
            checkAllRef.current.checked = false;
        }
        setItemSelected(listItemChecked);
    };

    const handleCheckAll = (e) => {
        checkAllRef.current.checked = e.target.checked;
        checkBoxRef.current.map((item, index) => {
            item.checked = e.target.checked;
        });
        handleCheck();
    };

    const handleMinus = (index) => {
        if (valueRef.current[index].value > 1) {
            valueRef.current[index].value--;
            dispatch(decrementItem(cart[index]));
        } else {
            valueRef.current[index].value = 1;
        }
    };
    const handlePlus = (index) => {
        valueRef.current[index].value++;
        dispatch(incrementItem(cart[index]));
    };

    const handleValueChange = (index) => {
        if (+valueRef.current[index].value < 1 || valueRef.current[index].value === "") {
            valueRef.current[index].value = 1;
        } else if (valueRef.current[index].value > 99) {
            valueRef.current[index].value = 99;
        }
        dispatch(changeQuantityItem({ item: cart[index], selected: valueRef.current[index].value }));
    };

    const handleRemove = (id) => {
        dispatch(removeItem(id))
    };

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Giỏ Hàng</title>
            </Head>
            <div className={styles.content}>
                <div className={styles.transport}>
                    <Image src={images.transport_icon} alt="transport" width={23} height={14} />
                    <span>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
                </div>
                <div className={styles.list_header}>
                    <input type="checkbox" className={styles.box} ref={checkAllRef} name="check-all" onChange={(e) => handleCheckAll(e)} />
                    <div style={{ width: "45%", paddingLeft: "10px" }}>Sản phẩm</div>
                    <div style={{ width: "16%", textAlign: "center", color: "#888" }}>Đơn giá</div>
                    <div style={{ width: "15%", textAlign: "center", color: "#888" }}>Số lượng</div>
                    <div style={{ width: "10%", textAlign: "center", color: "#888" }}>Số tiền</div>
                    <div style={{ width: "13%", textAlign: "center", color: "#888" }}>Thao tác</div>
                </div>
                {cart?.length > 0 ? (
                    cart.map((item, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <input
                                    type="checkbox"
                                    className={styles.box}
                                    ref={(el) => {
                                        checkBoxRef.current[index] = el;
                                    }}
                                    onChange={() => handleCheck(index)}
                                />
                                <div className={styles.product}>
                                    <Image src={item.thumbnail} alt={item.name} width={80} height={80} />
                                    <div className={styles.product_info}>
                                        <p>{item.description}</p>
                                        <Image src={images.free_ship_2} alt="free-ship" height={18} />
                                        <div className={styles.free_ship}>
                                            <Image src={images.seven} alt="seven" width={16} height={14} />
                                            <span>7 Ngày Miễn Phí Trả Hàng</span>
                                        </div>
                                    </div>
                                    <div className={styles.product_distribute}>
                                        <p>Phân Loại Hàng: </p>
                                        <p>black</p>
                                    </div>
                                </div>
                                <div className={styles.bill}>
                                    <p>đ{fPrice(item.price)}</p>
                                </div>
                                <div className={styles.quantity}>
                                    <button onClick={() => handleMinus(index)}>-</button>
                                    <input type="number" ref={(el) => (valueRef.current[index] = el)} defaultValue={item.selected} onChange={() => handleValueChange(index)} />
                                    <button onClick={() => handlePlus(index)}>+</button>
                                </div>
                                <div className={styles.money}>
                                    <p>đ{fPrice(item.price * item.selected)}</p>
                                </div>
                                <div className={styles.action}>
                                    <button onClick={()=>handleRemove(item._id)}>Xóa</button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Giỏ Hàng Trống</p>
                )}
                <div className={styles.pay}>
                    {/* <div className={styles.select_all}>
                        <input type="checkbox" className={styles.box} ref={(el) => (checkAllRef.current = el)} name="check-all" onChange={(e) => handleCheckAll(e)} />
                        <button>
                            Chọn tất cả&nbsp;
                            <span>({cart?.length})</span>
                        </button>
                    </div> */}
                    <div className={styles.total_money}>
                        <p>
                            Tổng thanh toán (<span>{itemSelected.length}</span> sản phẩm): <span className={styles.value}>đ{totalMoney(itemSelected)}</span>
                        </p>
                        <button>Mua hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { NumberWithCommas as fPrice } from "./formatPrice";

export const totalMoney = (list) => {
    const total = list.reduce((acc, el) => {
        return acc + el.price * el.selected;
    }, 0);
    return fPrice(total);
};

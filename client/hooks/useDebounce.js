import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [item, setItem] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setItem(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value]);

    return item;
};

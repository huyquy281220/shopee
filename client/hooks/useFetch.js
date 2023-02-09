import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
    try {
        const productData = await axios.get(url);
        return productData;
    } catch (error) {
        console.log(error);
    }
};

export const useFetch = (url) => {
    const apiUrl = process.env.NEXT_PUBLIC_API;
    const { data, error, isLoading } = useSWR(apiUrl + url, fetcher);

    return { data, error, isLoading };
};

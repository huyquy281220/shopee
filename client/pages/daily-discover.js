import useSWR from "swr";
import axios from "axios";
import dynamic from "next/dynamic";

const DiscoverPage = dynamic(() => import("../components/DailyDiscover"));

// import DiscoverPage from "../components/DailyDiscover";

export default function DailyDiscover() {
    // const fetcher = async (url) => {
    //     try {
    //         const newData = await axios.get(url);
    //         return newData;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const key = "http://localhost:4000/product/products?page=1";
    // const { data, error } = useSWR(key, fetcher, { revalidateOnFocus: true, revalidateOnReconnect: true });

    // if (error) return <div>Failed to load</div>;
    // if (!data) return <div>Loading...</div>;

    // const resData = data?.data;

    return <DiscoverPage />;
}

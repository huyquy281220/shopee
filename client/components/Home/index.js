import Banner from "./Banner.js";
import SubCategory from "./SubCategory";
import Category from "./Category";
import FlashSale from "./FlashSale";
import ShopeeMall from "./ShopeeMall";
import TopSearch from "./TopSearch.js";
import Suggestion from "./Suggestion.js";
import Loading from "../common/Loading.js";

export default function Home({ homeData }) {
    const { products, categories } = homeData;

    return (
        <div>
            <Banner />
            <SubCategory />
            <Category data={categories} />
            <FlashSale />
            <ShopeeMall />
            <TopSearch />
            <Suggestion data={products} />
            {/* <Suggestion /> */}
            {/* <Loading /> */}
        </div>
    );
}

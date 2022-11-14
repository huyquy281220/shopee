import Banner from "./Banner.js";
import SubCategory from "./SubCategory";
import Category from "./Category";
import FlashSale from "./FlashSale";
import ShopeeMall from "./ShopeeMall";
import TopSearch from "./TopSearch.js";

export default function Home() {
    return (
        <div>
            <Banner />
            <SubCategory />
            <Category />
            <FlashSale />
            <ShopeeMall />
            <TopSearch />
        </div>
    );
}

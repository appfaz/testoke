import React from "react";

import AppBarHome from "../../components/HomePage/AppBarHome";
import SearchInput from "../../components/HomePage/SearchInput";
import PromotionCardSlider from "../../components/HomePage/PromotionCardSlider";
import SectionTitleWithLink1 from "../../components/HomePage/SectionTitleWithLink1";
import CategorySlider from "../../components/HomePage/CategorySlider";
import SectionTitleWithLink2 from "../../components/HomePage/SectionTitleWithLink2";
import ProductCardSlider from "../../components/HomePage/ProductCardSlider";
import SimplePromotionCard from "../../components/HomePage/SimplePromotionCard";
import SectionTitleWithLink3 from "../../components/HomePage/SectionTitleWithLink3";
import ProductCardSlider1 from "../../components/HomePage/ProductCardSlider1";
import SimplePromotionCard from "../../components/HomePage/SimplePromotionCard";
import SectionTitleWithLink4 from "../../components/HomePage/SectionTitleWithLink4";
import ProductCardSlider2 from "../../components/HomePage/ProductCardSlider2";
import SectionTitleWithLink5 from "../../components/HomePage/SectionTitleWithLink5";
import ProductCardSlider3 from "../../components/HomePage/ProductCardSlider3";
import SectionTitleWithLink6 from "../../components/HomePage/SectionTitleWithLink6";
import PromoProductCard from "../../components/HomePage/PromoProductCard";
import SectionTitleOnly from "../../components/HomePage/SectionTitleOnly";
import NewsCard1 from "../../components/HomePage/NewsCard1";
import NewsCard2 from "../../components/HomePage/NewsCard2";
import NewsCard3 from "../../components/HomePage/NewsCard3";
import OulinedButton from "../../components/HomePage/OulinedButton";
import BottomNavigation from "../../components/HomePage/BottomNavigation";

const HomePage = () => {
  return (
    <div>
      <AppBarHome />
      <SearchInput />
      <PromotionCardSlider />
      <SectionTitleWithLink1 />
      <CategorySlider />
      <SectionTitleWithLink2 />
      <ProductCardSlider />
      <SimplePromotionCard />
      <SectionTitleWithLink3 />
      <ProductCardSlider1 />
      <SimplePromotionCard />
      <SectionTitleWithLink4 />
      <ProductCardSlider2 />
      <SectionTitleWithLink5 />
      <ProductCardSlider3 />
      <SectionTitleWithLink6 />
      <PromoProductCard />
      <SectionTitleOnly />
      <NewsCard1 />
      <NewsCard2 />
      <NewsCard3 />
      <OulinedButton />
      <BottomNavigation />
    </div>
  );
};

export default HomePage;

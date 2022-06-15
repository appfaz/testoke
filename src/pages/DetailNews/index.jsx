import React from "react";

import AppBarDoubleLinks from "../../components/DetailNews/AppBarDoubleLinks";
import Container2 from "../../components/DetailNews/Container2";
import Text2 from "../../components/DetailNews/Text2";
import Text3 from "../../components/DetailNews/Text3";
import Text4 from "../../components/DetailNews/Text4";
import Text5 from "../../components/DetailNews/Text5";
import SectionTitleOnly from "../../components/DetailNews/SectionTitleOnly";
import NewsCard1 from "../../components/DetailNews/NewsCard1";
import NewsCard2 from "../../components/DetailNews/NewsCard2";
import OulinedButton from "../../components/DetailNews/OulinedButton";

const DetailNews = () => {
  return (
    <div>
      <AppBarDoubleLinks />
      <Container2 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
      <SectionTitleOnly />
      <NewsCard1 />
      <NewsCard2 />
      <OulinedButton />
    </div>
  );
};

export default DetailNews;

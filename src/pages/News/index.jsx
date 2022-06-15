import React from "react";

import AppBarDetailPage from "../../components/News/AppBarDetailPage";
import SearchInput from "../../components/News/SearchInput";
import NewsCard1 from "../../components/News/NewsCard1";
import NewsCard2 from "../../components/News/NewsCard2";
import NewsCard3 from "../../components/News/NewsCard3";
import NewsCard4 from "../../components/News/NewsCard4";

const News = () => {
  return (
    <div>
      <AppBarDetailPage />
      <SearchInput />
      <NewsCard1 />
      <NewsCard2 />
      <NewsCard3 />
      <NewsCard4 />
    </div>
  );
};

export default News;

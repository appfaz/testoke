import React from "react";

import RatingAppBar from "../../components/ProductReview/RatingAppBar";
import ReviewStatistic from "../../components/ProductReview/ReviewStatistic";
import UserReview1 from "../../components/ProductReview/UserReview1";
import UserReview2 from "../../components/ProductReview/UserReview2";
import UserReview3 from "../../components/ProductReview/UserReview3";
import UserReview4 from "../../components/ProductReview/UserReview4";

const ProductReview = () => {
  return (
    <div>
      <RatingAppBar />
      <ReviewStatistic />
      <UserReview1 />
      <UserReview2 />
      <UserReview3 />
      <UserReview4 />
    </div>
  );
};

export default ProductReview;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ratingAppBar.js";

import Image6 from "./Image6";
import Text4 from "./Text4";
import Container4 from "./Container4";

const RatingAppBar = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-32 w-full p-4 flex items-center justify-center justify-between"
      onClick={onClickHandler}
    >
      <Image6 />
      <Text4 />
      <Container4 />
    </div>
  );
};

export default RatingAppBar;

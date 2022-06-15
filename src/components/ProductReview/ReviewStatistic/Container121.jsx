import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container121.js";

import Container122 from "./Container122";
import Container123 from "./Container123";
import Text85 from "./Text85";

const Container121 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full flex items-center justify-between gap-2"
      onClick={onClickHandler}
    >
      <Container122 />
      <Container123 />
      <Text85 />
    </div>
  );
};

export default Container121;

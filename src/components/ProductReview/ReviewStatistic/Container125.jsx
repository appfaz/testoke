import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container125.js";

import Container126 from "./Container126";
import Container127 from "./Container127";
import Text86 from "./Text86";

const Container125 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full flex gap-2 justify-between items-center"
      onClick={onClickHandler}
    >
      <Container126 />
      <Container127 />
      <Text86 />
    </div>
  );
};

export default Container125;

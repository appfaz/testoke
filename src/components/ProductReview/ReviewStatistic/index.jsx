import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/reviewStatistic.js";

import Container108 from "./Container108";
import Container116 from "./Container116";

const ReviewStatistic = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="w-full p-4 flex gap-2" onClick={onClickHandler}>
      <Container108 />
      <Container116 />
    </div>
  );
};

export default ReviewStatistic;

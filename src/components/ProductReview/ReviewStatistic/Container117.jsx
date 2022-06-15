import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container117.js";

import Container118 from "./Container118";
import Container119 from "./Container119";
import Text84 from "./Text84";

const Container117 = () => {
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
      <Container118 />
      <Container119 />
      <Text84 />
    </div>
  );
};

export default Container117;

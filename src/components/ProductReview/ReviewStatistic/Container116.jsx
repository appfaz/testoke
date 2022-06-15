import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container116.js";

import Container117 from "./Container117";
import Container121 from "./Container121";
import Container125 from "./Container125";
import Container129 from "./Container129";
import Container133 from "./Container133";

const Container116 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full flex-col flex-col gap-2 flex"
      onClick={onClickHandler}
    >
      <Container117 />
      <Container121 />
      <Container125 />
      <Container129 />
      <Container133 />
    </div>
  );
};

export default Container116;

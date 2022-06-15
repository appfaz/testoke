import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container133.js";

import Container134 from "./Container134";
import Container135 from "./Container135";
import Text88 from "./Text88";

const Container133 = () => {
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
      <Container134 />
      <Container135 />
      <Text88 />
    </div>
  );
};

export default Container133;

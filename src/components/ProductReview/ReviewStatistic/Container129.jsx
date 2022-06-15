import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container129.js";

import Container130 from "./Container130";
import Container131 from "./Container131";
import Text87 from "./Text87";

const Container129 = () => {
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
      <Container130 />
      <Container131 />
      <Text87 />
    </div>
  );
};

export default Container129;

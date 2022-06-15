import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/SimplePromotionCard/container38.js";

import Text23 from "./Text23";
import Container39 from "./Container39";

const Container38 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-1/2 flex flex-col justify-center"
      onClick={onClickHandler}
    >
      <Text23 />
      <Container39 />
    </div>
  );
};

export default Container38;

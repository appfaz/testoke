import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container122.js";

import Image81 from "./Image81";
import Image82 from "./Image82";
import Image83 from "./Image83";
import Image84 from "./Image84";
import Image85 from "./Image85";

const Container122 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex" onClick={onClickHandler}>
      <Image81 />
      <Image82 />
      <Image83 />
      <Image84 />
      <Image85 />
    </div>
  );
};

export default Container122;

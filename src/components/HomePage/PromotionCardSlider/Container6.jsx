import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/PromotionCardSlider/container6.js";

import Container7 from "./Container7";
import Image2 from "./Image2";
import Container8 from "./Container8";

const Container6 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex w-80 relative" onClick={onClickHandler}>
      <Container7 />
      <Image2 />
      <Container8 />
    </div>
  );
};

export default Container6;

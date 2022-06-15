import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/ProductCardSlider/container33.js";

import Image14 from "./Image14";
import Container34 from "./Container34";

const Container33 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className=" flex flex-col w-60 bg-white rounded-xl shadow-lg"
      onClick={onClickHandler}
    >
      <Image14 />
      <Container34 />
    </div>
  );
};

export default Container33;

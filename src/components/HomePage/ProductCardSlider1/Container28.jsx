import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/ProductCardSlider1/container28.js";

import Image11 from "./Image11";
import Container29 from "./Container29";

const Container28 = () => {
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
      <Image11 />
      <Container29 />
    </div>
  );
};

export default Container28;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/ProductCardSlider2/container23.js";

import Image8 from "./Image8";
import Container24 from "./Container24";

const Container23 = () => {
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
      <Image8 />
      <Container24 />
    </div>
  );
};

export default Container23;

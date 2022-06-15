import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/ProductCardSlider/container25.js";

import Container26 from "./Container26";
import Text14 from "./Text14";
import Image10 from "./Image10";

const Container25 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full flex justify-between items-center mt-4"
      onClick={onClickHandler}
    >
      <Container26 />
      <Text14 />
      <Image10 />
    </div>
  );
};

export default Container25;

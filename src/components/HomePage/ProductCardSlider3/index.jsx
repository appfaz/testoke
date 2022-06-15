import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/productCardSlider3.js";

import Container21 from "./Container21";
import Container27 from "./Container27";
import Container32 from "./Container32";

const ProductCardSlider3 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className=" p-4 inline-flex overflow-x-scroll gap-4 w-full"
      onClick={onClickHandler}
    >
      <Container21 />
      <Container27 />
      <Container32 />
    </div>
  );
};

export default ProductCardSlider3;

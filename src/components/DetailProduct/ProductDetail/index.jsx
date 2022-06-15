import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/productDetail.js";

import Container137 from "./Container137";
import Container138 from "./Container138";

const ProductDetail = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="w-full flex gap-2 p-4 border-b " onClick={onClickHandler}>
      <Container137 />
      <Container138 />
    </div>
  );
};

export default ProductDetail;

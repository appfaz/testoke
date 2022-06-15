import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/Categories/gridProduct.js";

import Container64 from "./Container64";
import Container65 from "./Container65";
import Container72 from "./Container72";
import Container77 from "./Container77";

const GridProduct = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-32 w-full p-4 grid grid-cols-2 gap-x-2 gap-y-4"
      onClick={onClickHandler}
    >
      <Container64 />
      <Container65 />
      <Container72 />
      <Container77 />
    </div>
  );
};

export default GridProduct;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/ProductCardSlider3/container31.js";

import Image12 from "./Image12";
import Text17 from "./Text17";

const Container31 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="bg-white flex gap-2 items-center" onClick={onClickHandler}>
      <Image12 />
      <Text17 />
    </div>
  );
};

export default Container31;

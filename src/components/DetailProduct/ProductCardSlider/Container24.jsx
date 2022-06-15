import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/ProductCardSlider/container24.js";

import Text11 from "./Text11";
import Text12 from "./Text12";
import Container25 from "./Container25";

const Container24 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="w-full p-4" onClick={onClickHandler}>
      <Text11 />
      <Text12 />
      <Container25 />
    </div>
  );
};

export default Container24;

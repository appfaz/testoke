import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/ProductCardSlider/container34.js";

import Text19 from "./Text19";
import Text20 from "./Text20";
import Container35 from "./Container35";

const Container34 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="bg-white w-full p-4" onClick={onClickHandler}>
      <Text19 />
      <Text20 />
      <Container35 />
    </div>
  );
};

export default Container34;

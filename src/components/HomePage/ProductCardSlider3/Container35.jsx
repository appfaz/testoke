import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/ProductCardSlider3/container35.js";

import Container36 from "./Container36";
import Text22 from "./Text22";
import Image16 from "./Image16";

const Container35 = () => {
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
      <Container36 />
      <Text22 />
      <Image16 />
    </div>
  );
};

export default Container35;

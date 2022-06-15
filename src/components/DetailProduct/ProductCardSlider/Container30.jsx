import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/ProductCardSlider/container30.js";

import Container31 from "./Container31";
import Text18 from "./Text18";
import Image13 from "./Image13";

const Container30 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="bg-white w-full flex justify-between items-center mt-4"
      onClick={onClickHandler}
    >
      <Container31 />
      <Text18 />
      <Image13 />
    </div>
  );
};

export default Container30;

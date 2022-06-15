import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/PromoProductCard/container93.js";

import Container94 from "./Container94";
import Text67 from "./Text67";
import Image55 from "./Image55";

const Container93 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="mt-2 flex items-center justify-between"
      onClick={onClickHandler}
    >
      <Container94 />
      <Text67 />
      <Image55 />
    </div>
  );
};

export default Container93;

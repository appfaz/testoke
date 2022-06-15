import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/PromoProductCard/container100.js";

import Container101 from "./Container101";
import Text74 from "./Text74";
import Image59 from "./Image59";

const Container100 = () => {
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
      <Container101 />
      <Text74 />
      <Image59 />
    </div>
  );
};

export default Container100;

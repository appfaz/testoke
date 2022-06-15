import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/ProductCardSlider/container26.js";

import Image9 from "./Image9";
import Text13 from "./Text13";

const Container26 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="bg-white flex gap-2 items-center" onClick={onClickHandler}>
      <Image9 />
      <Text13 />
    </div>
  );
};

export default Container26;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/SimplePromotionCard/container37.js";

import Container38 from "./Container38";
import Image17 from "./Image17";

const Container37 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-32 bg-white w-full  rounded-xl p-7 flex justify-between bg-green-400"
      onClick={onClickHandler}
    >
      <Container38 />
      <Image17 />
    </div>
  );
};

export default Container37;

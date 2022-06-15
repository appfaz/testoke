import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/PromotionCardSlider/container8.js";

import Text1 from "./Text1";
import Text2 from "./Text2";

const Container8 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="inline-flex gap-4 w-40 absolute h-full bg-red-500 rounded-r-full flex flex-col justify-center px-2 bg-blue-500"
      onClick={onClickHandler}
    >
      <Text1 />
      <Text2 />
    </div>
  );
};

export default Container8;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/CategorySlider/container56.js";

import Image24 from "./Image24";

const Container56 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="rounded-xl flex items-center justify-center w-20 h-20 bg-violet-100"
      onClick={onClickHandler}
    >
      <Image24 />
    </div>
  );
};

export default Container56;

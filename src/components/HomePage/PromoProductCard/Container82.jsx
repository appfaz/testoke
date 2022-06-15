import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/PromoProductCard/container82.js";

import Container83 from "./Container83";
import Container85 from "./Container85";

const Container82 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className=" flex flex-col bg-white rounded-xl shadow-lg w-60"
      onClick={onClickHandler}
    >
      <Container83 />
      <Container85 />
    </div>
  );
};

export default Container82;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/PromoProductCard/container89.js";

import Container90 from "./Container90";
import Container92 from "./Container92";

const Container89 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className=" flex flex-col w-60 rounded-xl shadow-lg bg-white"
      onClick={onClickHandler}
    >
      <Container90 />
      <Container92 />
    </div>
  );
};

export default Container89;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/GridProduct/container70.js";

import Container71 from "./Container71";
import Text45 from "./Text45";
import Image41 from "./Image41";

const Container70 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex items-center justify-between" onClick={onClickHandler}>
      <Container71 />
      <Text45 />
      <Image41 />
    </div>
  );
};

export default Container70;

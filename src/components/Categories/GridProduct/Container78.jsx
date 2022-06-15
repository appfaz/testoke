import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/Categories/GridProduct/container78.js";

import Text52 from "./Text52";
import Text53 from "./Text53";
import Container79 from "./Container79";

const Container78 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="mt-2" onClick={onClickHandler}>
      <Text52 />
      <Text53 />
      <Container79 />
    </div>
  );
};

export default Container78;

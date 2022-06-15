import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/GridProduct/container74.js";

import Text48 from "./Text48";
import Text49 from "./Text49";
import Container75 from "./Container75";

const Container74 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="p-4" onClick={onClickHandler}>
      <Text48 />
      <Text49 />
      <Container75 />
    </div>
  );
};

export default Container74;

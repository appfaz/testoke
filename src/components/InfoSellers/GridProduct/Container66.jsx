import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/GridProduct/container66.js";

import Text38 from "./Text38";
import Text39 from "./Text39";
import Container67 from "./Container67";

const Container66 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="mt-2 p-4" onClick={onClickHandler}>
      <Text38 />
      <Text39 />
      <Container67 />
    </div>
  );
};

export default Container66;

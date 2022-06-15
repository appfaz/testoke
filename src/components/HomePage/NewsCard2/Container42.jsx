import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/NewsCard2/container42.js";

import Container43 from "./Container43";
import Text28 from "./Text28";

const Container42 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="justify-between flex flex-col" onClick={onClickHandler}>
      <Container43 />
      <Text28 />
    </div>
  );
};

export default Container42;

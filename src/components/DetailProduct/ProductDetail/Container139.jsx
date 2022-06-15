import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/ProductDetail/container139.js";

import Container140 from "./Container140";
import Text93 from "./Text93";

const Container139 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex gap-4 items-center mt-4" onClick={onClickHandler}>
      <Container140 />
      <Text93 />
    </div>
  );
};

export default Container139;

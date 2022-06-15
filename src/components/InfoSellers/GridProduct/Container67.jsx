import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/GridProduct/container67.js";

import Container68 from "./Container68";
import Text41 from "./Text41";
import Image38 from "./Image38";

const Container67 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex justify-between items-center" onClick={onClickHandler}>
      <Container68 />
      <Text41 />
      <Image38 />
    </div>
  );
};

export default Container67;

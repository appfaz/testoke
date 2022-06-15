import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/GridProduct/container79.js";

import Container80 from "./Container80";
import Text55 from "./Text55";
import Image49 from "./Image49";

const Container79 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="mt-2  flex items-center justify-between px-4"
      onClick={onClickHandler}
    >
      <Container80 />
      <Text55 />
      <Image49 />
    </div>
  );
};

export default Container79;

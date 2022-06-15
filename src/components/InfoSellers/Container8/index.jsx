import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/container8.js";

import Container9 from "./Container9";
import Container10 from "./Container10";
import Container11 from "./Container11";

const Container8 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full p-4 flex items-center justify-between"
      onClick={onClickHandler}
    >
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
};

export default Container8;

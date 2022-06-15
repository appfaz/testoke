import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/CategorySlider/container55.js";

import Container56 from "./Container56";
import Text33 from "./Text33";

const Container55 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="flex flex-col items-center justify-center p-2"
      onClick={onClickHandler}
    >
      <Container56 />
      <Text33 />
    </div>
  );
};

export default Container55;

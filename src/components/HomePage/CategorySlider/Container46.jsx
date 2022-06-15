import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/CategorySlider/container46.js";

import Container47 from "./Container47";
import Text30 from "./Text30";

const Container46 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="p-2 items-center justify-center flex flex-col"
      onClick={onClickHandler}
    >
      <Container47 />
      <Text30 />
    </div>
  );
};

export default Container46;

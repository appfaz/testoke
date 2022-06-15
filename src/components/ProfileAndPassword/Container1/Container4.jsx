import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProfileAndPassword/Container1/container4.js";

import Text5 from "./Text5";
import Container5 from "./Container5";
import Text7 from "./Text7";

const Container4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="bg-white w-full mt-4" onClick={onClickHandler}>
      <Text5 />
      <Container5 />
      <Text7 />
    </div>
  );
};

export default Container4;

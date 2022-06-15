import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/VerificationPage/Container1/container4.js";

import Container5 from "./Container5";
import Container6 from "./Container6";
import Container7 from "./Container7";
import Container8 from "./Container8";

const Container4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="bg-white w-full mt-4 flex gap-5" onClick={onClickHandler}>
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
};

export default Container4;

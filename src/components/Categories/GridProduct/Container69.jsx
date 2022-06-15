import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/Categories/GridProduct/container69.js";

import Text42 from "./Text42";
import Text43 from "./Text43";
import Container70 from "./Container70";

const Container69 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="p-4 mt-2" onClick={onClickHandler}>
      <Text42 />
      <Text43 />
      <Container70 />
    </div>
  );
};

export default Container69;

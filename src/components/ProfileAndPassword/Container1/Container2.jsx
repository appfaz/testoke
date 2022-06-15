import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProfileAndPassword/Container1/container2.js";

import Text3 from "./Text3";
import Container3 from "./Container3";

const Container2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="bg-white mt-4 w-full" onClick={onClickHandler}>
      <Text3 />
      <Container3 />
    </div>
  );
};

export default Container2;

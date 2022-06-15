import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProfileAndPassword/container1.js";

import Text1 from "./Text1";
import Text2 from "./Text2";
import Container2 from "./Container2";
import Container4 from "./Container4";

const Container1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="bg-white p-4 w-full" onClick={onClickHandler}>
      <Text1 />
      <Text2 />
      <Container2 />
      <Container4 />
    </div>
  );
};

export default Container1;

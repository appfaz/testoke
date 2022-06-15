import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ResetPassword/container2.js";

import Text1 from "./Text1";
import Text2 from "./Text2";
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
    <div className="w-full p-4 mt-10" onClick={onClickHandler}>
      <Text1 />
      <Text2 />
      <Container3 />
    </div>
  );
};

export default Container2;

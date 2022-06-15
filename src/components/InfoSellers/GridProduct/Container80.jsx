import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/GridProduct/container80.js";

import Image48 from "./Image48";
import Text54 from "./Text54";

const Container80 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex gap-2 items-center" onClick={onClickHandler}>
      <Image48 />
      <Text54 />
    </div>
  );
};

export default Container80;

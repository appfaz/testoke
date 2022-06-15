import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/appBarDoubleLinks2.js";

import Image8 from "./Image8";
import Text6 from "./Text6";
import Container5 from "./Container5";

const AppBarDoubleLinks2 = () => {
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
      <Image8 />
      <Text6 />
      <Container5 />
    </div>
  );
};

export default AppBarDoubleLinks2;

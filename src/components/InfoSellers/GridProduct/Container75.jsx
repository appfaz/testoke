import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/GridProduct/container75.js";

import Container76 from "./Container76";
import Text51 from "./Text51";
import Image46 from "./Image46";

const Container75 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="bg-white flex justify-between items-center mt-2"
      onClick={onClickHandler}
    >
      <Container76 />
      <Text51 />
      <Image46 />
    </div>
  );
};

export default Container75;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/container7.js";

import Image7 from "./Image7";
import Text5 from "./Text5";

const Container7 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="bg-white p-4 w-full flex gap-4 items-center"
      onClick={onClickHandler}
    >
      <Image7 />
      <Text5 />
    </div>
  );
};

export default Container7;

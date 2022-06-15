import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/LoginPage/Container4/container5.js";

import Text6 from "./Text6";
import Image3 from "./Image3";

const Container5 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full bg-gray-100 rounded-xl px-4 py-6 mt-4 flex gap-4"
      onClick={onClickHandler}
    >
      <Text6 />
      <Image3 />
    </div>
  );
};

export default Container5;

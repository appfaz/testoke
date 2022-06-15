import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProfileAndPassword/Container1/container5.js";

import Text6 from "./Text6";
import Image1 from "./Image1";

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
      className="bg-white w-full flex items-center justify-between bg-gray-100 rounded-xl px-4 py-6 mt-3"
      onClick={onClickHandler}
    >
      <Text6 />
      <Image1 />
    </div>
  );
};

export default Container5;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ResetPassword/Container2/container4.js";

import Text4 from "./Text4";

const Container4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="mt-3 w-full rounded-xl px-4 py-6 bg-gray-100"
      onClick={onClickHandler}
    >
      <Text4 />
    </div>
  );
};

export default Container4;

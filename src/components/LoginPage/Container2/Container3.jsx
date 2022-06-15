import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/LoginPage/Container2/container3.js";

import Text4 from "./Text4";

const Container3 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full rounded-xl bg-gray-100 mt-4 py-6 px-4"
      onClick={onClickHandler}
    >
      <Text4 />
    </div>
  );
};

export default Container3;

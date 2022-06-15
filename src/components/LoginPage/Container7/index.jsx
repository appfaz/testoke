import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/LoginPage/container7.js";

import Text7 from "./Text7";
import Link1 from "./Link1";

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
      className="w-32 w-full p-4 flex items-center justify-between"
      onClick={onClickHandler}
    >
      <Text7 />
      <Link1 />
    </div>
  );
};

export default Container7;

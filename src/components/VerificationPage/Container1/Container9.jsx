import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/VerificationPage/Container1/container9.js";

import Text11 from "./Text11";
import Text12 from "./Text12";

const Container9 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="mt-5 w-full flex items-center justify-between"
      onClick={onClickHandler}
    >
      <Text11 />
      <Text12 />
    </div>
  );
};

export default Container9;

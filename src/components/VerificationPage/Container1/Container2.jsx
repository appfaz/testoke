import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/VerificationPage/Container1/container2.js";

import Text5 from "./Text5";
import Link1 from "./Link1";

const Container2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="bg-white w-full flex items-center gap-4"
      onClick={onClickHandler}
    >
      <Text5 />
      <Link1 />
    </div>
  );
};

export default Container2;

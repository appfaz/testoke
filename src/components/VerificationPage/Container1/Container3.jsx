import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/VerificationPage/Container1/container3.js";

import Text6 from "./Text6";
import Link2 from "./Link2";

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
      className="bg-white w-full mt-10 flex items-center justify-between"
      onClick={onClickHandler}
    >
      <Text6 />
      <Link2 />
    </div>
  );
};

export default Container3;

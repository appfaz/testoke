import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/LoginPage/Container4/text6.js";

import Image2 from "./Image2";

const Text6 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <p
      className="font-sans text-lg text-gray-400 flex-1"
      onClick={onClickHandler}
    >
      Masukan Kata Sandi Akun
      <Image2 />
    </p>
  );
};

export default Text6;

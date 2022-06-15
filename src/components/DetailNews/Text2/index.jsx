import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailNews/text2.js";

const Text2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <p
      className="font-sans bg-white p-4 font-medium text-2xl"
      onClick={onClickHandler}
    >
      Philosophy Tips Merawat Bodi Mobil agar Tidak Terlihat Kusam
    </p>
  );
};

export default Text2;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/ProductDetail/text89.js";

const Text89 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <p
      className="font-sans text-green-600 px-3 rounded-full py-1 font-medium bg-emerald-100 text-sm"
      onClick={onClickHandler}
    >
      Tersedia : 250
    </p>
  );
};

export default Text89;

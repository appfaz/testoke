import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/SimplePromotionCard2/image17.js";

const Image17 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <img
      className="w-36 h-36"
      src="https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/pysjCWEh/MX472_AV4-removebg-preview.png"
      onClick={onClickHandler}
    />
  );
};

export default Image17;

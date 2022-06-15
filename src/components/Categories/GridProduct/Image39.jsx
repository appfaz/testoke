import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/Categories/GridProduct/image39.js";

const Image39 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <img
      className="h-40 w-52 rounded-t-xl object-cover"
      src="https://image.shutterstock.com/image-photo/fujifilm-xt4-1680mm-lens-black-260nw-1915938655.jpg"
      onClick={onClickHandler}
    />
  );
};

export default Image39;

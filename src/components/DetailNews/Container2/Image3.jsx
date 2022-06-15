import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailNews/Container2/image3.js";

const Image3 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <img
      className="w-full rounded-xl object-cover h-48"
      src="https://cdn.motor1.com/images/mgl/8QxmP/s3/mclaren-765lt.webp"
      onClick={onClickHandler}
    />
  );
};

export default Image3;

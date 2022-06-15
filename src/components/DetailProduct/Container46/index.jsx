import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/container46.js";

import Button2 from "./Button2";
import Button3 from "./Button3";

const Container46 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="bg-white w-full p-4 flex gap-4" onClick={onClickHandler}>
      <Button2 />
      <Button3 />
    </div>
  );
};

export default Container46;

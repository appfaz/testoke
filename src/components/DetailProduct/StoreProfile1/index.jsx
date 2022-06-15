import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/storeProfile1.js";

import Image60 from "./Image60";
import Container102 from "./Container102";
import Container104 from "./Container104";

const StoreProfile1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full p-4 flex items-center gap-3 border-b"
      onClick={onClickHandler}
    >
      <Image60 />
      <Container102 />
      <Container104 />
    </div>
  );
};

export default StoreProfile1;

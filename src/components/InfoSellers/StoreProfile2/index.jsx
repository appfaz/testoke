import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/storeProfile2.js";

import Image63 from "./Image63";
import Container105 from "./Container105";
import Container107 from "./Container107";

const StoreProfile2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full flex items-center gap-4 p-4"
      onClick={onClickHandler}
    >
      <Image63 />
      <Container105 />
      <Container107 />
    </div>
  );
};

export default StoreProfile2;

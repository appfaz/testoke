import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/InfoSellers/StoreProfile2/container106.js";

import Text78 from "./Text78";
import Image64 from "./Image64";

const Container106 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex items-center gap-2 mt-2" onClick={onClickHandler}>
      <Text78 />
      <Image64 />
    </div>
  );
};

export default Container106;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/SimplePromotionCard2/container39.js";

import Text24 from "./Text24";
import Image18 from "./Image18";

const Container39 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex items-center mt-4 gap-4" onClick={onClickHandler}>
      <Text24 />
      <Image18 />
    </div>
  );
};

export default Container39;

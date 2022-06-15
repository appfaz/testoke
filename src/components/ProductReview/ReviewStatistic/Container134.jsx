import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container134.js";

import Image96 from "./Image96";
import Image97 from "./Image97";
import Image98 from "./Image98";
import Image99 from "./Image99";
import Image100 from "./Image100";

const Container134 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex" onClick={onClickHandler}>
      <Image96 />
      <Image97 />
      <Image98 />
      <Image99 />
      <Image100 />
    </div>
  );
};

export default Container134;

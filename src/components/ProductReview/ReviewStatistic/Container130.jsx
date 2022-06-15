import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container130.js";

import Image91 from "./Image91";
import Image92 from "./Image92";
import Image93 from "./Image93";
import Image94 from "./Image94";
import Image95 from "./Image95";

const Container130 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex" onClick={onClickHandler}>
      <Image91 />
      <Image92 />
      <Image93 />
      <Image94 />
      <Image95 />
    </div>
  );
};

export default Container130;

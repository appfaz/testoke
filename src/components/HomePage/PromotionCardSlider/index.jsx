import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/promotionCardSlider.js";

import Container5 from "./Container5";
import Container9 from "./Container9";
import Container13 from "./Container13";

const PromotionCardSlider = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full inline-flex overflow-x-scroll gap-4 w-full p-4"
      onClick={onClickHandler}
    >
      <Container5 />
      <Container9 />
      <Container13 />
    </div>
  );
};

export default PromotionCardSlider;

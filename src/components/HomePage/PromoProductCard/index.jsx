import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/promoProductCard.js";

import Container81 from "./Container81";
import Container88 from "./Container88";
import Container95 from "./Container95";

const PromoProductCard = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className=" p-4 inline-flex overflow-x-scroll gap-4 w-full"
      onClick={onClickHandler}
    >
      <Container81 />
      <Container88 />
      <Container95 />
    </div>
  );
};

export default PromoProductCard;

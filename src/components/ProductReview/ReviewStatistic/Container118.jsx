import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/container118.js";

import Image76 from "./Image76";
import Image77 from "./Image77";
import Image78 from "./Image78";
import Image79 from "./Image79";
import Image80 from "./Image80";

const Container118 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex" onClick={onClickHandler}>
      <Image76 />
      <Image77 />
      <Image78 />
      <Image79 />
      <Image80 />
    </div>
  );
};

export default Container118;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/ReviewStatistic/image82.js";

const Image82 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <img
      className="w-5 h-5"
      src="https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/dWUoeaWo/star.png"
      onClick={onClickHandler}
    />
  );
};

export default Image82;

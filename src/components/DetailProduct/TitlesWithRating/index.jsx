import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/titlesWithRating.js";

import Text3 from "./Text3";
import Container1 from "./Container1";

const TitlesWithRating = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full p-4 flex items-center justify-between"
      onClick={onClickHandler}
    >
      <Text3 />
      <Container1 />
    </div>
  );
};

export default TitlesWithRating;

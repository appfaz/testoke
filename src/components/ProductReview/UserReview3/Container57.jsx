import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/UserReview3/container57.js";

import Container58 from "./Container58";
import Container59 from "./Container59";
import Container61 from "./Container61";
import Text37 from "./Text37";

const Container57 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex-1" onClick={onClickHandler}>
      <Container58 />
      <Container59 />
      <Container61 />
      <Text37 />
    </div>
  );
};

export default Container57;

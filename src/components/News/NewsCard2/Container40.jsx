import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/News/NewsCard2/container40.js";

import Container41 from "./Container41";
import Image19 from "./Image19";

const Container40 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="w-32 w-full flex gap-5" onClick={onClickHandler}>
      <Container41 />
      <Image19 />
    </div>
  );
};

export default Container40;

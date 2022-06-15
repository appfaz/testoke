import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/categorySlider.js";

import Container45 from "./Container45";
import Container48 from "./Container48";
import Container51 from "./Container51";
import Container54 from "./Container54";

const CategorySlider = () => {
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
      <Container45 />
      <Container48 />
      <Container51 />
      <Container54 />
    </div>
  );
};

export default CategorySlider;

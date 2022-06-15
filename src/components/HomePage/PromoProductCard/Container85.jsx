import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/PromoProductCard/container85.js";

import Text57 from "./Text57";
import Text58 from "./Text58";
import Text59 from "./Text59";
import Container86 from "./Container86";

const Container85 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="mt-2 p-4" onClick={onClickHandler}>
      <Text57 />
      <Text58 />
      <Text59 />
      <Container86 />
    </div>
  );
};

export default Container85;

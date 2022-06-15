import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/PromoProductCard/container96.js";

import Container97 from "./Container97";
import Container99 from "./Container99";

const Container96 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className=" flex flex-col w-60 bg-white rounded-xl shadow-lg"
      onClick={onClickHandler}
    >
      <Container97 />
      <Container99 />
    </div>
  );
};

export default Container96;

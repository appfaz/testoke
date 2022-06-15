import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/BottomNavigation/container2.js";

import Image2 from "./Image2";
import Text2 from "./Text2";

const Container2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="flex items-center justify-center flex-col gap-2"
      onClick={onClickHandler}
    >
      <Image2 />
      <Text2 />
    </div>
  );
};

export default Container2;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/News/SearchInput/container1.js";

import Text1 from "./Text1";
import Image1 from "./Image1";

const Container1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-32 bg-white w-full rounded-full flex items-center gap-4 px-4 py-5 bg-gray-100"
      onClick={onClickHandler}
    >
      <Text1 />
      <Image1 />
    </div>
  );
};

export default Container1;

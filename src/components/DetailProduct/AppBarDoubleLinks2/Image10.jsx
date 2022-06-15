import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/AppBarDoubleLinks2/image10.js";

const Image10 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <img
      className="w-7 h-7"
      src="https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/ajeBvVeX/shopping-cart.png"
      onClick={onClickHandler}
    />
  );
};

export default Image10;

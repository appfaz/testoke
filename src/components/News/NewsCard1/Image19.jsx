import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/News/NewsCard1/image19.js";

const Image19 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <img
      className="w-20 h-20 rounded-xl object-cover"
      src="https://asset.kompas.com/crops/Z64a9xJ_GgaZumkXwSI7bC89qr0=/219x27:1044x577/740x500/data/photo/2022/06/15/62a902ba2f37d.jpg"
      onClick={onClickHandler}
    />
  );
};

export default Image19;

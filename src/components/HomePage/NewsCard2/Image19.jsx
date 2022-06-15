import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/NewsCard2/image19.js";

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
      src="https://pict.sindonews.net/dyn/480/pena/news/2022/06/14/13/798101/2-mantan-pejabat-pajak-penerima-suap-divonis-9-dan-8-tahun-penjara-pnm.jpg"
      onClick={onClickHandler}
    />
  );
};

export default Image19;

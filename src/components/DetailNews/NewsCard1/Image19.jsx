import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailNews/NewsCard1/image19.js";

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
      src="https://haji.kemenag.go.id/v4/sites/default/files/styles/normal_size/public/2022-06/WhatsApp%20Image%202022-06-14%20at%2010.39.19%20AM%20%281%29.jpeg?itok=8VWn75N3"
      onClick={onClickHandler}
    />
  );
};

export default Image19;

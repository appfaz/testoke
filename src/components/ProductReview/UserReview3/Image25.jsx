import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/ProductReview/UserReview3/image25.js";

const Image25 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <img
      className="rounded-full w-15 h-15 object-cover"
      src="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg"
      onClick={onClickHandler}
    />
  );
};

export default Image25;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/sectionTitleWithLink4.js";

import Text1 from "./Text1";
import Link1 from "./Link1";

const SectionTitleWithLink4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-32 w-full p-4 flex justify-between items-center"
      onClick={onClickHandler}
    >
      <Text1 />
      <Link1 />
    </div>
  );
};

export default SectionTitleWithLink4;

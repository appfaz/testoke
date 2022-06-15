import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailNews/text5.js";

const Text5 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <p className="font-sans bg-white px-4 py-2" onClick={onClickHandler}>
      The speaker unit contains a diaphragm that is precision-grown from NAC
      Audio bio-cellulose, making it stiffer, lighter and stronger than regular
      PET speaker units, and allowing the sound-producing diaphragm to vibrate
      without the levels of distortion found in other speakers.
    </p>
  );
};

export default Text5;

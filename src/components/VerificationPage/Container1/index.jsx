import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/VerificationPage/container1.js";

import Text1 from "./Text1";
import Text2 from "./Text2";
import Text3 from "./Text3";
import Text4 from "./Text4";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container9 from "./Container9";
import Button2 from "./Button2";

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
      className="bg-white h-full w-full p-4 flex flex-col justify-center"
      onClick={onClickHandler}
    >
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container9 />
      <Button2 />
    </div>
  );
};

export default Container1;

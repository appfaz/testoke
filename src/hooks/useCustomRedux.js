import { useDispatch, useSelector } from "react-redux";

const useCustomRedux = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  let setGlobalState = {};

  Object.keys(globalState).forEach((key) => {
    setGlobalState[key] = (callback) => {
      const value = callback(globalState[key]);
      if (!value) return;

      switch (key) {
        default:
          break;
      }
    };
  });

  return { globalState, setGlobalState };
};

export default useCustomRedux;

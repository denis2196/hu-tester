import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const Incrementers = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchData().then((resp) => {
  //     dispatch(setProfileData(resp.data));
  //   });
  // }, []);

  return (
    <div>
      <button
        data-testid="dec-btn"
        onClick={() => dispatch(decrement("somevalue"))}
      >
        -
      </button>
      <button data-testid="inc-btn" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};

export default Incrementers;

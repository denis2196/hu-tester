import { useSelector } from "react-redux";

const IncrementedValue = () => {
  const { counter, profileData } = useSelector((state) => state.updateCounter);
  return <div data-testid="counter-val">{counter}</div>;
};

export default IncrementedValue;

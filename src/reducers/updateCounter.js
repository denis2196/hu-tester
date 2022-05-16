const initState = {
  counter: 0,
  name: "rohan",
  profileData: {},
  courses: [],
  wishlist: [],
};

const updateCounter = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      // console.log("action.value inc", action.value, state.counter);
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      console.log("action.value dec", action.value, state);
      return { ...state, counter: state.counter - 1 };
    case "SET_PROFILE_DATA":
      return { ...state, profileData: action.data };
    default:
      return state;
  }
};

export default updateCounter;

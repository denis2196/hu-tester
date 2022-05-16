// export const Actions = {
//   increment: "INCREMENT",
//   decrement: "DECREMENT",
// };

export const increment = () => {
  return {
    type: "INCREMENT",
    value: true,
  };
};

export const decrement = (val) => {
  console.log("val", val);
  return {
    type: "DECREMENT",
    value: val,
  };
};

export const setProfileData = (data) => {
  return {
    type: "SET_PROFILE_DATA",
    data: data,
  };
};

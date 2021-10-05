const initState = {
  users: [
    { id: 1, name: "TB" },
    { id: 2, name: "Dev" },
    { id: 3, name: "Redux" },
  ],
};
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;

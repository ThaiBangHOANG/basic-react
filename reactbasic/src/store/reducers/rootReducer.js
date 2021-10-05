const initState = {
  users: [
    { id: 1, name: "TB" },
    { id: 2, name: "Dev" },
    { id: 3, name: "Redux" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };

    default:
      return state;
  }
};

export default rootReducer;

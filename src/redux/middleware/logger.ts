const Logger = (state) => (next) => (action) => {
  console.log("Current State=>", state.getState());
  console.log("Action=>", action);
  next(action);
  console.log("Current State=>", state.getState());
  // console.log(state);
  // console.log(next);
  // console.log(action);
};
export default Logger;

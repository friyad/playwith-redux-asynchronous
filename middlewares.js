const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am delaying you!");

    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }

  return next(action);
};

module.exports = {
  delayActionMiddleware,
};

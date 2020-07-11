const elBox = document.querySelector("#box");

const machine = {
  initial: "inactive",
  states: {
    inactive: {
      on: {
        CLICK: "active",
      },
    },
    active: {
      on: {
        CLICK: "inactive",
      },
    },
  },
};

// Pure function that returns the next state,
// given the current state and sent event
const transition = (state, event) => {
  return machine.states[state].on[event] || state;
};

const interpret = (machine) => {
  let currentState = "inactive";

  const send = (event) => {
    const nextState = transition(currentState, event);

    currentState = nextState;

    elBox.dataset.state = currentState;
  };

  return { send };
};

const { send } = interpret(machine);

elBox.addEventListener("click", () => {
  send("CLICK");
});

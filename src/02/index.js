import { createMachine } from "xstate";

const elBox = document.querySelector("#box");

const clickMachine = createMachine({
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
});

let currentState = clickMachine.initial;

const send = (event) => {
  const nextState = clickMachine.transition(currentState, event);

  currentState = nextState.value;

  elBox.dataset.state = currentState;
};

elBox.addEventListener("click", () => {
  send("CLICK");
});

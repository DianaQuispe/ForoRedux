import createStore from "redux-zero";

let User = [
  {
    name: "Morgan McCircuit",
    comment: "Content marked as abusive",
    avatar:
      "https://cdn.dribbble.com/users/458522/screenshots/2375875/futurama___bender___dribbbler.jpg",
    id: 1
  },
  {
    name: "Bending Bender",
    comment: "excellent stuff",
    avatar:
      "https://ih0.redbubble.net/image.26042333.5052/flat,800x800,075,f.jpg",
    id: 2
  }
];
const initialState = {
  user: User
};

const store = createStore(initialState);
export default store;

import createStore from "redux-zero";

class USER {
  constructor(name, coment, id) {
    this.name = name;
    this.coment = coment;
    this.id = id;
  }
}
// let USER = [{ name: "as", coment: "asd", id: 1 }];
const initialState = {
  user: USER,
  users: [],
  postComent: false
};

const store = createStore(initialState);
export default store;

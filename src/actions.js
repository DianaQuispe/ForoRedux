import store from "./store";

export const addComment = (name, comment, avatar) => {
  if (name != "" && comment != "") {
    const addComment = store.getState().user.concat({
      avatar:
        "http://amrel.com/wp-content/uploads/2014/06/cute-robot-drawing1.jpg",
      name: name,
      comment: comment,
      id: store.getState().user.length + 1
    });
    store.setState({
      user: addComment
    });
  } else {
    alert("Colocar un nombre y/o comentario valido");
  }
};
export const removeComment = index => {
  const addComment = store.getState().user.filter((item, idx) => idx != index);
  store.setState({
    user: addComment
  });
};

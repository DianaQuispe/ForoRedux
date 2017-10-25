import store from "./store";
// export const postComent  = () => {
//   let users = store.getState().users;
//   let user = store.getState().user
//   users.push(user)
//   console.log(store.getState().users)
//   let postComent = true;
//   store.setState({
//     postComent : postComent,
//   })
// }
export const addComent = ({name, coment} ) => {
  let users = store.getState().users;
  users.push(user)
console.log(store.getState().user)
const addComentNow = [...store.getState().users, {
  name : name,
  coment: coment,
  id: store.getState().user.length +1,
}];
let postComent = true;

  store.setState({
    user: addComentNow,
    postComent : postComent,
  })
}
// export const play = () => {
//   let currentSong = store.getState().currentSong;
//   let thisSong = store.getState().songs[currentSong];
//   let  active = thisSong.active = true ;
//   store.setState({
//     currentSong: currentSong
//   })

//   console.log(thisSong);
// };
// export const stop = () => {
//   alert("stop.js");
// };
// export const next = () => {
//   alert("next.js");
// };
// export const selectOption = option => {
//   let answers = store.getState().answers;
//   let push = answers.push(option.target.textContent);
//   let currentQuestion = store.getState().currentQuestion;
//   let answerGood = [];
//   let thatAnswer = store.getState().game[store.getState().currentQuestion].answerGood;
//   answerGood.push(thatAnswer); 
//   console.log(answers, answerGood);
//   let cont = 0;

//   if (answers[currentQuestion] == answerGood) {
//       console.log('asd')
//       cont++;
//   }else {
//       console.log('s')
//   }
//   console.log(cont)

//   currentQuestion++;
//   if (push == store.getState().game.length) {
//     store.setState({
//       complet: true
//     });
//     console.log(store.getState().complet);
//   }
//   store.setState({
//     currentQuestion: currentQuestion,
//     answers: answers
//   });

// };
// export const submit = () => {

// };

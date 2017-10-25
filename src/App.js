import React, { Component } from "react";
import { connect } from "redux-zero/react";
import { addComent } from "./actions";
import "./App.css";
// import {
//   FieldGroup
//   Button,
//   FormGroup,
//   ControlLabel,
//   FormControl,
//   HelpBlock,
//  } from "react-bootstrap";

const Coments = ({ user, users, postComent }) => {
  const Items = user.map((person, t) => {
    return (
      <div key={t}>
        <hr />
        <div>
          <b>NOMBRE</b>
          <br /> {user[t].name} <br />
          <b>COMENT</b>
          <br /> {user[t].coment} <br />
        </div>
        <br />
        <button>delete</button>
        <button>report as abuss</button>
        <hr />
      </div>
    );
  });
  return (
    <div>
      <br />
      <b>COMMENTS</b>
      <br />
      longitud comments
      {postComent &&  <div>
        <b>NOMBRE</b> {users.name}  <br />
        <b>COMENT</b><br />
        <button>delete</button>
        <button>report as abuss</button>
      </div> }
     
    </div>
  );
};
const NewComent = ({ user }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log ( 'this..', this);
    addComent(this.inputName.value, this.inputComent.value)
  }
  return (
    <form onSubmit= {onSubmit}>
      NEW COMMENT<br />
      <br />
      <input
        placeholder="name"
        label="name"
        ref={(e)=>this.inputName = e }
        type="text"
      />
      <br />
      <br />
      <input
        placeholder="coment"
        label="coment"
        ref={(e) => this.inputComent = e}
        type="text"
      />
      <br />
      <br />
      <button type="submit" >POST COMMENT</button>
      <br />
    </form>
  );
};
const App = ({ user, users, postComent }) => {
  return (
    <div>
      <NewComent user={user} users={users} postComent = {postComent} />
      <Coments user={user} users={users}  postComent = {postComent} />
    </div>
  );
};

const mapToProps = ({ user, users, postComent }) => ({
  user,
  users,
  postComent
});
export default connect(mapToProps)(App);

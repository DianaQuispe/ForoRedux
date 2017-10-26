import React, { Component } from "react";
import { connect } from "redux-zero/react";
import { addComment, removeComment } from "./actions";
import "./App.css";

const Comment = ({ name, comment,avatar, removeComment }) => {
  return (
    <div >
      <div className='row' >
        <img className='col-md-2 img-circle img-responsive avatar' src ={avatar} />
        <div className='leter'>
          <br />
          <p> {name}</p>
          <hr />
          <p className='comment' >{comment}</p>
        </div>
        <button onClick={removeComment}>delete</button>
        <button>report as abuss</button>
      </div>
    </div>
  );
};

const App = ({ user }) => {
  const PersonComments = user.map((a, b) => {
    return <Comment
              key={b}
              name={a.name}
              comment={a.comment}
              avatar={a.avatar}
              removeComment = {() => removeComment(b) } 
            />;
  });
  const onSubmit = e => {
    e.preventDefault();
    addComment(this.nameInputRef.value, this.commentInputRef.value);
  };
  return (
    <div>
      <form className="newComment" onSubmit={onSubmit}>
      <br/>
        <h4 className="colorBlue">NEW COMMENT </h4>
        <input
          className="inputValue"
          placeholder="name"
          type="text"
          ref={e => (this.nameInputRef = e)}
        />
        <br />
        <textarea
          className="inputValue"
          placeholder="comment"
          type="text"
          ref={e => (this.commentInputRef = e)}
        />
        <button id="postComment" type="submit">
          POST COMMENT
        </button>
        <br />
      </form>
      <br />
      <h4> <b>COMMENTS</b></h4>
      <h5> <p className="length">{user.length} comments</p></h5>
      <div>{PersonComments}</div>
    </div>
  );
};
const mapToProps = ({ user }) => ({ user });

export default connect(mapToProps)(App);

import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker'
import CommentDetail from './CommentDetail'


function App() {
  return (
    <div className="ui container comments" >

      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>



  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker'
import CommentDetail from './CommentDetail'


function App() {
  return (
    <div className="ui container comments" >

      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} comment="Hello"/>
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" avatar={faker.image.avatar()} comment="World"/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM"  avatar={faker.image.avatar()} comment="AAAA"/>

    </div>



  );
}

export default App;

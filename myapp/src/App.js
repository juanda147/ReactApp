import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


function App() {
  return (
    <div className="ui container comments" >

      <ApprovalCard>
        <div>
          <h4>
            Are you sure you want to do this?
          </h4>
        </div>

      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          comment="Hello"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          avatar={faker.image.avatar()}
          comment="World"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          avatar={faker.image.avatar()}
          comment="AAAA"
        />
      </ApprovalCard>


    </div>



  );
}

export default App;
